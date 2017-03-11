import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

import IndividualProfileCard from './IndividualProfileCard'
import News from './News'
import FollowingList from './FollowingList'
import UserStocks from '../stocks/UserStocks'

import { fetchUser } from '../actions/userActions'


class Home extends Component {

  componentWillMount(){
    this.props.fetchUser()
  }

  render() {
    const user = this.props.user

    return (
      <Grid>
        <Grid.Column width={ 5 }>
          <IndividualProfileCard user={ user } />
          <FollowingList user={ user }/>
        </Grid.Column>

        <Grid.Column width={ 11 }>
          <UserStocks user={ user } />
          <News user={ user } />
        </Grid.Column >
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    fetchUser: function(){
      let action = fetchUser()
      dispatch(action)
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home)
