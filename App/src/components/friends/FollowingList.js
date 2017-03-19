import React, { Component } from 'react'

import { Card, List } from 'semantic-ui-react'
import LinkedFriendCard from './LinkedFriendCard'

import Loading from '../Loading'

export default class FollowingList extends Component {

  render() {

    const followingList = this.props.userFollowing

    if ( followingList === undefined || followingList.hasOwnProperty('no_friends') ) {
      return (
        <div className="following-list">
          <Card>
            <h5>Following</h5>
            <h5>Not Following any users, use search to find friends</h5>
            <br></br>
          </Card>
        </div>
      )
    }

    if ( followingList.length === 0 ) {
      return (
        <div className="following-list inline">
          <Card>
            <h5>Following</h5>
            <h5>No one is following this stock</h5>
            <br></br>
          </Card>
        </div>
      )
    }

    return (
      <div className="following-list">
        <Card>
          <h5>Following</h5>
          <List animated verticalAlign='middle'>
            { followingList.map( ( following, i ) => <LinkedFriendCard key={i} following={ following } /> ) }
          </List>
        </Card>
      </div>
    )
  }
}
