import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import Loading from '../Loading'

class StockData extends Component {

  render() {

    return (
      <div className='center'>
        <h3>Summary</h3>
        <br></br>
        <table className='inline'>
          <tbody>
            <tr>
              <td className='left'>Open:</td>
              <td className='right'>100.00</td>
            </tr>
            <tr>
              <td className='left'>Close:</td>
              <td className='right'>100.00</td>
            </tr>
            <tr>
              <td className='left'>Market Cap:</td>
              <td className='right'>100.00</td>
            </tr>
          </tbody>
        </table>
        <table className='inline'>
          <tbody>
            <tr>
              <td className='left'>Day's Range:</td>
              <td className='right'>100.00</td>
            </tr>
            <tr>
              <td className='left'>52 Week Range:</td>
              <td className='right'>100.00</td>
            </tr>
            <tr>
              <td className='left'>Dividend/ Yield:</td>
              <td className='right'>100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default StockData
