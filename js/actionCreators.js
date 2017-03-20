import { SET_SEARCH_TERM } from './actions'

// UI has no concern over how to create actions, thus use actionCreator
export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}
