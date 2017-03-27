export default function(state=[], action){
  console.log(action.type)
  switch (action.type) {

    case 'FETCH_STOCK':
    // debugger
      return action.payload

    case 'FETCH_STOCK_DATA':
      return Object.assign( {}, state, { data: action.payload.data } )

    case 'FETCH_STOCK_SOCIAL_DATA':
      return Object.assign( {}, state, { social: action.payload.data.social } )

    case 'FETCH_STOCK_NEWS':
      return Object.assign( {}, state, { news: action.payload.data } )

    case 'FETCH_STOCK_PRICE_HISTORY':
      return Object.assign( {}, state, { history: action.payload.data } )

    case 'ADD_STOCK':
      return Object.assign( {}, state, { users: action.payload.stock } )

    case 'REMOVE_STOCK':
      return Object.assign( {}, state, { users: action.payload.stock } )

    default:
      return state
  }
}
