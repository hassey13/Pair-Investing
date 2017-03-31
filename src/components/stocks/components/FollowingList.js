import React, { Component } from 'react'

import { Card, List } from 'semantic-ui-react'
import LinkedFriendCard from '../../friends/LinkedFriendCard'

import Loading from '../../Loading'

export default class FollowingList extends Component {

  render() {
    const following = this.props.following

    if ( following === undefined ) return ( <Loading /> )

    if ( 'users' in following ) {

      let companyName = following.company_name

      if ( companyName.length > 15 ) {
        companyName = following.ticker
      }

      if ( following.length === 0 ) {
        return (
          <div className="following-list">
            <Card>
              <h5>Following { companyName }</h5>
              <h5>No one is following this stock</h5>
              <br></br>
            </Card>
          </div>
        )
      }
      return (
        <div className="following-list">
          <Card>
            <h5>Following { companyName }</h5>
            <List animated verticalAlign='middle'>
              { following.users.map( ( following, i ) => <LinkedFriendCard key={i} following={ following } /> ) }
            </List>
          </Card>
        </div>
      )
    }

    return ( <div>Error!</div>)
  }
}
