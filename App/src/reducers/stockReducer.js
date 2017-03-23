export default function(state=[], action){
  switch (action.type) {

    case 'FETCH_STOCKS_OWNED':
      return action.payload

    case 'REMOVE_STOCK':
      if ( typeof state === "array" ) return state.filter(stock => stock.ticker !== action.payload)
      return state

    case 'FETCH_STOCK_DATA':
      return action.payload

    default:
      return state
  }
}
