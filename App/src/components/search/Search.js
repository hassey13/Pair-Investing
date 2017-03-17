import React from 'react'
import { connect } from 'react-redux'

import { Search, Grid } from 'semantic-ui-react'

import { queryStocks, queryUsers, clearSearch } from '../../actions/searchActions'


class NewSearch extends React.Component {

  componentWillMount() { this.resetComponent() }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  completeLoading = () => this.setState({ isLoading: false })

  handleResultSelect = (e, result) => this.setState({ value: result.title })

  handleSearchChange = (e, value) => {
    this.props.clearSearch()
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
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

    const { isLoading, value } = this.state
    const results = this.props.search

    // debugger

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            category
            loading={isLoading}
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

    clearSearch: function() {
      let action = clearSearch()
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSearch)
