const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_POTS':
     return state;
    case 'FETCH_POTS_SUCCESS':
     return { ...state, pots: action.response.pots }
    case 'FETCH_POTS_FAILURE':
    default:
      return state;  
  }
}

export default reducer; 