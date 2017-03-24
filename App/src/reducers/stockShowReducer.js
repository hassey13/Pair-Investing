export default function(state=[], action){
  switch (action.type) {

    case 'FETCH_STOCK':
      return action.payload

    case 'FETCH_STOCK_DATA':
      return Object.assign( {}, state, { data: action.payload.data } )

    case 'FETCH_STOCK_NEWS':
      return Object.assign( {}, state, { news: action.payload.data } )

    case 'ADD_STOCK':
      return Object.assign( {}, state, { users: action.payload.stock } )

    case 'REMOVE_STOCK':
      return Object.assign( {}, state, { users: action.payload.stock } )

    default:
      return state
  }
}
