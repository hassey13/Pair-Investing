import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { Search, Grid } from 'semantic-ui-react'

import { queryStocks, queryUsers, startSearch, clearSearch } from '../../actions/searchActions'


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
    }

    this.resetComponent()
  }

  handleSearchChange = (e, value) => {
    this.props.clearSearch()
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
        this.props.startSearch()
        this.props.queryStocks(value)
        this.props.queryUsers(value)
    }, 2)
  }

  // validateResults = () => {
  //   var tempResults = this.props.search
  //   var memory = {}
  //
  //   return memory
  // }

  render() {
    const value = this.state.value
    const isLoading = this.state.isLoading && this.props.search.loading

    var results = {}
    if ( 'stocks' in this.props.search ) {
      results = {...results, stocks: this.props.search.stocks}
    }
    if ( 'users' in this.props.search ) {
      results = {...results, users: this.props.search.users}
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

    startSearch: function() {
      let action = startSearch()
      dispatch( action )
    },

    clearSearch: function() {
      let action = clearSearch()
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSearch)
