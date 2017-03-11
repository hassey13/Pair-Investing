import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class UserSearchResults extends Component {
  constructor(props) {
    super(props)

    this.handleUserClick = this.handleUserClick.bind(this)
  }

  handleUserClick() {
    browserHistory.push(`/profile/${this.props.user.username}`)
    window.location.reload()
  }

  render() {
    return (
      <div className="results" onClick={ this.handleUserClick }>
        <div className="padded" >
          <p className="stock-header" >
            {`${ this.props.user.first_name } ${ this.props.user.last_name }`}
            <br/>
            {`${ this.props.user.username }`}
          </p>
        </div>
      </div>
    )
  }
}

export default UserSearchResults
