export default function userReducer( state=[], action ){
  switch (action.type) {

    case 'LOGIN_USER':
      if ( 'error' in action.payload ) {
        return action.payload
      }
      else {
        return action.payload.user
      }

    case 'CREATE_USER':
      if ( 'error' in action.payload ) {
        return state
      }
      else {
        return action.payload
      }

    case 'FETCH_USER':
      if ( 'error' in action.payload ) {
        return state
      }
      else {
        return action.payload
      }

    case 'REMOVE_STOCK':
      const new_state = state.stocks.filter(stock => stock.ticker !== action.payload)
      return Object.assign({}, state, { stocks: new_state })

    case 'ADD_STOCK':
      return Object.assign({}, state, { stocks: [...state.stocks, action.payload] } )

    case 'FOLLOW_USER':
      return Object.assign({}, state, { friends: action.payload } )

    case 'UNFOLLOW_USER':
      return Object.assign({}, state, { friends: action.payload } )

    default:
      return state
  }
}
