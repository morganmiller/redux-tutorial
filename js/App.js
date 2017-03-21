import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux' // makes redux available inside of app (?)
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match exactly pattern='/' component={Landing} />
        <Match
          pattern='/search'
          component={(props) => <Search shows={preload.shows} {...props} />}
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => props
              .params.id === show.imdbID)
            return <Details show={shows[0]} {...props} />
          }} // if there were no shows, would do redirect. Also, react router
            // ships with Miss component for no match handling.
           // (could wrap in 404 or redirect).
        />
      </div>
    </Provider>
  )
}

export default App
