import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: 'something random'
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
  //return Object.assign({}, state, {searchTerm: action.searchTerm}) (works?)
}

// check out 'combine reducers' as alternative
// investigate normalization in redux
const rootReducer = (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
