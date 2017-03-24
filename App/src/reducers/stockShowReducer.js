export default function(state=[], action){
  switch (action.type) {

    case 'FETCH_STOCK_DATA':
      return action.payload

    case 'ADD_STOCK':
      return Object.assign( {}, state, { users: action.payload.stock } )

    case 'REMOVE_STOCK':
      return Object.assign( {}, state, { users: action.payload.stock } )

    default:
      return state
  }
}
