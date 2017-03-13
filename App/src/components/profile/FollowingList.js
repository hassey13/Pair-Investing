import React, { Component } from 'react'

import { Card, List } from 'semantic-ui-react'
import LinkedFriendCard from './LinkedFriendCard'

import Loading from '../Loading'

export default class FollowingList extends Component {

  render() {
    const user = this.props.user

    if ( user === undefined || user.length === 0 ) {
      return ( <Loading/> )
    }

    const followingList = user.friends

    if ( followingList === undefined || followingList.length === 0 || user.hasOwnProperty('no_friends') ) {
      return (
        <div className="following-list">
          <Card>
            <h5>Following</h5>
            <h5>Use the search bar to find friends</h5>
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
