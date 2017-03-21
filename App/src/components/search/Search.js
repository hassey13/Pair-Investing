import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { Search, Grid } from 'semantic-ui-react'

import { queryStocks, queryUsers, startSearch, clearSearch } from '../../actions/searchActions'
import { fetchOtherUser } from '../../actions/userActions'

class NewSearch extends React.Component {

  componentWillMount() { this.resetComponent() }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, result) => {
    var a = e.target.parentElement
    var b = a.parentElement
    var c = b.parentElement
    var category = c.firstChild.textContent

    if ( category === "stocks") {
      browserHistory.push(`/stocks/${result.title}`)
    }
    else {
      browserHistory.push(`/profile/${result.description}`)
      this.props.fetchOtherUser(result.description)
    }

    this.resetComponent()
  }

  handleSearchChange = (e, value) => {
    this.props.clearSearch()
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
        this.props.startSearch(value)
        this.props.queryStocks(value)
        this.props.queryUsers(value)
    }, 2)
  }

  render() {
    const value = this.state.value
    var upValue = value.toUpperCase()

    var isLoading = this.state.isLoading
    if ( `${upValue}` in this.props.search ) {
      isLoading = this.props.search[upValue].loading
    }

    var results = {}
    if ( !!upValue && `${upValue}` in this.props.search ) {

      if ( 'stocks' in this.props.search[upValue] ) {
        results = {...results, stocks: this.props.search[upValue].stocks}
      }
      if ( 'users' in this.props.search[upValue] ) {
        results = {...results, users: this.props.search[upValue].users}
      }
    }

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            category
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    viewUser: state.viewUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryStocks: function(query) {
      let action = queryStocks(query)
      dispatch( action )
    },

    queryUsers: function(query) {
      let action = queryUsers(query)
      dispatch( action )
    },

    startSearch: function(value) {
      let action = startSearch(value)
      dispatch( action )
    },

    clearSearch: function() {
      let action = clearSearch()
      dispatch( action )
    },
    fetchOtherUser: function(username){
      let action = fetchOtherUser(username)
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSearch)
