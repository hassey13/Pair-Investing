export default function(state={default : {loading: false}}, action){
  switch (action.type) {

    case 'QUERY_STOCKS':
      if ( 'users' in state[action.payload.query]) {
        return Object.assign({}, state, { [action.payload.query]: { users: state[action.payload.query].users, stocks: action.payload.data, loading: false} })
      }
      else {
        return Object.assign({}, state, { [action.payload.query]: { stocks: action.payload.data, loading: true} })
      }

    case 'QUERY_USERS':
      if ('stocks' in state[action.payload.query] ) {
        return Object.assign({}, state, { [action.payload.query]: { stocks: state[action.payload.query].stocks, stocks: action.payload.data, loading: false} })
      }
      else {
        return Object.assign({}, state, { [action.payload.query]: { users: action.payload.data, loading: true } })
      }

    case 'START_SEARCH':
      return Object.assign({}, state, { [action.payload.toUpperCase()]: { loading: true} })

    default:
      return state
  }
}

// State looks like an object with keys in the format below:
// { query: 'fb', data: {
//     stocks: {
//       name: stocks, results: {
//           stuff }
//       }
//     },
//     users: {
//       name: users, results: {
//           stuff }
//     },
//     loading: t/f
//   }
// }
