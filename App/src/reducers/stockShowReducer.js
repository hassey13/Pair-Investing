export default function(state=[], action){
  switch (action.type) {

    case 'FETCH_STOCK_DATA':
      return action.payload

    default:
      return state
  }
}
