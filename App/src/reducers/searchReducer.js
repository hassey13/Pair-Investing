export default function(state={loading: false}, action){
  switch (action.type) {

    case 'QUERY_STOCKS':
      if ( 'stocks' in state ) {
        return Object.assign({}, state, { stocks: action.payload })
      }
      else {
        if ( 'results' in action.payload) {
          return {...state, loading: false, stocks: action.payload }
        }
        else {
          return {...state, loading: false}
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
      return { ...state, loading: true }

    case 'CLEAR_SEARCH':
      return action.payload

    default:
      return state
  }
}
