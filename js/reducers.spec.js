import reducers from './reducers'

test('reducers: SET_SEARCH_TERM', () => {
  let state
  state = reducers({ searchTerm: '', omdbData: {} }, { type: 'SET_SEARCH_TERM', searchTerm: 'house' })
  expect(state).toEqual({ searchTerm: 'house', omdbData: {} })
})
