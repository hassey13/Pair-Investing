import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Card, Button, Image } from 'semantic-ui-react'

import Loading from '../Loading'

import { followUser, unfollowUser } from '../../actions/userActions'

class IndividualProfileCard extends Component {

  handleFollow(username) {
    this.props.followUser(username)
    window.location.reload()
  }

  handleEdit() {
    browserHistory.push(`/edit`)
  }

  handleUnfollow(username) {
    this.props.unfollowUser(username)
  }

  render(){
    let user = this.props.user
    let currentUser = undefined


    if ( this.props.currentUser !== 0 ) currentUser = this.props.currentUser

    if ( user === undefined || user.length === 0 ) return <Loading />

    if (user.bio === undefined ) {
      user.bio = `${ user.first_name } is an awesome person.`
    }

    if ( currentUser === undefined || currentUser.length === 0 || user.username === currentUser.username ) {
      return (
        <Card className="card">
          <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
            <Card.Content>
              <Card.Header>{`${ user.first_name } ${ user.last_name }`}</Card.Header>
              <Card.Meta>{ user.username }</Card.Meta>
              <Card.Description>{ user.bio }</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Button onClick={ this.handleEdit.bind(this, user.username) } color='yellow'>Edit Profile</Button>
              </a>
              </Card.Content>
        </Card>
      )
    }

    for (var i = 0; i < currentUser.friends.length; i++) {
      if ( currentUser.friends[i].username === user.username) {
        return (
          <Card className="card">
            <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
              <Card.Content>
                <Card.Header>{`${ user.first_name } ${ user.last_name }`}</Card.Header>
                <Card.Meta>{ user.username }</Card.Meta>
                <Card.Description>{`${ user.first_name } is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.`}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Button onClick={ this.handleUnfollow.bind(this, {username: user.username} ) } color='red'>Unfollow</Button>
                </a>
              </Card.Content>
          </Card>
        )
      }
    }

    return (
      <Card className="card">
        <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
          <Card.Content>
            <Card.Header>{`${ user.first_name } ${ user.last_name }`}</Card.Header>
            <Card.Meta>{ user.username }</Card.Meta>
            <Card.Description>{`${ user.first_name } is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.`}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Button onClick={ this.handleFollow.bind(this, {username: user.username} ) } color='green'>Follow</Button>
            </a>
            </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    followUser: function(username){
      let action = followUser(username)
      dispatch( action )
    },
    unfollowUser: function(username){
      let action = unfollowUser(username)
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps )( IndividualProfileCard )
