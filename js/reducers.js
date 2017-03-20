const DEFAULT_STATE = {
  searchTerm: ''
}

// check out 'combine reducers' as alternative
// investigate normalization in redux
const rootReducer = (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default rootReducer
