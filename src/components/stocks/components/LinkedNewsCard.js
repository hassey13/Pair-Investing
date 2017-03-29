import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List } from 'semantic-ui-react'
import { fetchStock } from '../../../actions/stockActions'

class LinkedNewsCard extends Component {

  render() {
    const data = this.props.data

    return (
      <List.Item>
        <List.Content>
          <List.Header><a target='_blank' href={data.url} >{`${data.title}`}</a></List.Header>
        </List.Content>
      </List.Item>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchStock: ( stock ) => {
      let action = fetchStock( stock )
      dispatch(action)
    }
  }
}

export default connect( null, mapDispatchToProps )( LinkedNewsCard )
