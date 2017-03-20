import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux' // makes redux available inside of app (?)
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
