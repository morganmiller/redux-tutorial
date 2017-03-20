import React from 'react'
import ShowCard from './ShowCard'
const { string, arrayOf, shape } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>video streaming thing</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
              return (<ShowCard {...show} key={show.imdbID} />)
            })
          }
        </div>
      </div>
    )
  }
})

export default Search
