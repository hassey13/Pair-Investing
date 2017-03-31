import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { Popup, Button } from 'semantic-ui-react'

import { followUser, unfollowUser } from '../../actions/userActions'

class ProfileButtons extends Component {

  handleEdit() {
    browserHistory.push(`/edit`)
  }

  handleMessage() {
    console.log("Sending A Beautiful Message!")
  }

  handleFollow(username) {
    this.props.followUser(username)
  }

  handleUnfollow(username) {
    this.props.unfollowUser(username)
  }

  checkFollowing(user) {
    if ( !('view' in user ) || user.friends.length === 0 ) return false
    let i = 0
    while ( i < user.friends.length ) {
      if ( user.friends[i].username === user.view.username  ) {
        return true
      }
      i += 1
    }
    return false
  }

  render() {
    const user = this.props.user

    if ( !('view' in user ) || user.username === user.view.username ) {
      return (
        <div className={'center'}>
          <Button className={'profile-button'} onClick={ this.handleEdit.bind(this, user.username) } color='yellow'>Edit</Button>
        </div>
      )
    }

    if ( this.checkFollowing(user) ) {
      return (
        <div className={'center'}>
          <Popup
            trigger={ <Button className={'profile-button'} onClick={ this.handleMessage.bind(this, user.username) } color='blue'>Message</Button> }
            content='Coming Soon...'
          />
          <Button className={'profile-button'} onClick={ this.handleUnfollow.bind(this, user.view.username) } color='red'>Unfollow</Button>
        </div>
      )
    }

    return (
      <div className={'center'}>
        <Popup
          trigger={ <Button className={'profile-button'} onClick={ this.handleMessage.bind(this, user.username) } color='blue'>Message</Button> }
          content='Coming Soon...'
        />
        <Button className={'profile-button'} onClick={ this.handleFollow.bind(this, user.view.username) } color='green'>Follow</Button>
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
