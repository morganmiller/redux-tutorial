import React from 'react'
import ShowCard from './ShowCard'
const { string, arrayOf, shape } = React.PropTypes
import Header from './Header'

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
        <Header
          showSearch //={true} is implied
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
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
