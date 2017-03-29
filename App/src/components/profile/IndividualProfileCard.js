import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Card, Image } from 'semantic-ui-react'

import ProfileButtons from './ProfileButtons'

import { followUser, unfollowUser } from '../../actions/userActions'

class IndividualProfileCard extends Component {

  handleEdit() {
    browserHistory.push(`/edit`)
  }

  handleFollow(username) {
    this.props.followUser(username)
  }


  handleUnfollow(username) {
    this.props.unfollowUser(username)
  }

  render(){
    const loggedInUser = this.props.user
    let user = this.props.user

    if ( ('view' in user ) ) {
      user = this.props.user.view
    }

    if (user.bio === undefined ) user.bio = `${ user.first_name } is an awesome person.`

    return (
      <Card className="card">
        <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
          <Card.Content>
            <Card.Header>{`${ user.first_name } ${ user.last_name }`}</Card.Header>
            <Card.Meta>{ user.username }</Card.Meta>
            <Card.Description>{ user.bio }</Card.Description>
          </Card.Content>
          <Card.Content extra>

              <ProfileButtons user={ loggedInUser } />

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
