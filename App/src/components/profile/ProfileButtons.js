import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { followUser, unfollowUser } from '../../actions/userActions'

class ProfileButtons extends Component {

  constructor() {
    super()
    this.state = {
      followed: undefined
    }
  }

  componentWillMount() {
    this.checkFollowing(this.props.user, this.props.currentUser)
  }

  componentWillReceiveProps(nextProps) {
    this.checkFollowing(nextProps.user, this.props.currentUser)
  }

  handleEdit() {
    browserHistory.push(`/edit`)
  }

  handleMessage() {
    console.log("Sending Message!")
  }

  handleFollow(username) {
    this.props.followUser(username)
    this.setState({ followed: true })
  }

  handleUnfollow(username) {
    this.props.unfollowUser(username)
    this.setState({ followed: false })
  }

  checkFollowing(user, currentUser) {
    if ( currentUser === undefined || currentUser.length === 0 ) return false
    let i = 0
    while ( i < currentUser.friends.length ) {
      if ( currentUser.friends[i].username === user.username  ) {
        this.setState({ followed: true })
        return true
      }
      i += 1
    }
    this.setState({ followed: false })
    return false
  }

  render() {
    const user = this.props.user
    const currentUser = this.props.currentUser

    if ( currentUser === undefined || currentUser.length === 0 || user.username === currentUser.username ) {
      return (
        <div className={'center'}>
          <Button className={'profileButton'} onClick={ this.handleEdit.bind(this, user.username) } color='yellow'>Edit Profile</Button>
        </div>
      )
    }

    if ( this.state.followed ) {
      return (
        <div className={'center'}>
          <Button className={'profileButton'} onClick={ this.handleMessage.bind(this, user.username) } color='blue'>Message</Button>
          <Button className={'profileButton'} onClick={ this.handleUnfollow.bind(this, user.username) } color='red'>Unfollow</Button>
        </div>
      )
    }

    return (
      <div className={'center'}>
        <Button className={'profileButton'} onClick={ this.handleMessage.bind(this, user.username) } color='blue'>Message</Button>
        <Button className={'profileButton'} onClick={ this.handleFollow.bind(this, user.username) } color='green'>Follow</Button>
      </div>
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

export default connect( null, mapDispatchToProps )( ProfileButtons )
