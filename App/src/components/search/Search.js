import React from 'react'
import { connect } from 'react-redux'

import SearchResults from './SearchResults'
import UserSearchResults from './UserSearchResults'

import { queryStocks } from '../../actions/stockActions'
import { fetchAllUsers } from '../../actions/userActions'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      removeResults: true
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.getSearchComponent = this.getSearchComponent.bind(this)
  }

  handleInput() {
    this.setState({ removeResults: false })
    this.queryUnlessBlank()
  }

  handleBlur() {
    setTimeout(()=>{ this.setState({ removeResults: true }) }, 250)
  }

  handleFocus() {
    this.queryUnlessBlank()
  }

  render() {
    const stockSearch = this.props.stockSearch
    const userResults = this.props.userSearch
    const searchComponent = this.getSearchComponent(stockSearch)
    const userResultsComponent = this.getUserSearchComponent(userResults)

    return (
      <div className="ui search" >
        <div className="ui input">
          <input
            className="prompt"
            icon='search'
            placeholder='Search...'

            type='search'
            ref='search'
            autoComplete='off'
            onChange={ this.handleInput }
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
          />
        </div>

        { searchComponent }
        <br/>
        { userResultsComponent }
      </div>
    )
  }

  clearQuery(){
    this.refs.search.value = ''
  }

  queryUnlessBlank() {
    const query = this.refs.search.value
    if(query !== ''){
      this.setState({ removeResults: false })
      this.props.queryStocks(query)
      this.props.queryUsers()
    } else {
      this.setState({ removeResults: true })
    }
  }

  getSearchComponent(stockSearch, userSearch){
    let component = null

    if(!this.state.removeResults){
      component = (
        <div>
          {
            stockSearch.map((stock, i) => {
              return <SearchResults key={i} clearQuery={this.clearQuery.bind(this)} ticker={ stock.ticker } company_name={ stock.name } />
            })
          }
        </div>
      )
    }

    return component
  }

  getUserSearchComponent(userResults){
    let component = null
    let filteredResults = []

    for(var i = 0; i < userResults.length; i++){
      let firstName = userResults[i].first_name.toLowerCase()
      let lastName = userResults[i].last_name.toLowerCase()
      if ( (firstName.indexOf(this.refs.search.value.toLowerCase()) > -1) || (lastName.indexOf(this.refs.search.value) > -1) ) filteredResults.push(userResults[i])
    }

    if(!this.state.removeResults){
      component = (
        <div>
          {
            filteredResults.map((user, i) => {
              return <UserSearchResults key={i} clearQuery={this.clearQuery.bind(this)} user={ user } />
            })
          }
        </div>
      )
    }

    return component
  }
}

const mapStateToProps = (state) => {
  return {
    stockSearch: state.search,
    userSearch: state.userSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryStocks: function(query) {
      let action = queryStocks(query)
      dispatch( action )
    },

    queryUsers: function() {
      let action = fetchAllUsers()
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
