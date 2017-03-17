export default function(state={}, action){
  switch (action.type) {

    case 'QUERY_STOCKS':
      if ( 'stocks' in state ) {
        return Object.assign({}, state, { stocks: action.payload })
      }
      else {
        if ( 'results' in action.payload) {
          return {...state, stocks: action.payload }
        }
        else {
          return state
        }
      }

    case 'QUERY_USERS':
      if ( 'users' in state ) {
        return Object.assign({}, state, { users: action.payload })
      }
      else {
        if ( 'results' in action.payload) {
          return {...state, users: action.payload }
        }
        else {
          return state
        }
      }

    case 'START_SEARCH':
      return {stocks: {loading: true}, users: {loading: true}}

    case 'CLEAR_SEARCH':
      return action.payload

    default:
      return state
  }
}
