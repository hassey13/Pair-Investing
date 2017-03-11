export default function viewUserReducer( state=[], action ){
  switch (action.type) {
    case 'FETCH_OTHER_USER':
      return action.payload.data
    default:
      return state
  }
}
