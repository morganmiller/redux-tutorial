import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
const { string, arrayOf, shape } = React.PropTypes
import Header from './Header'

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.props.searchTerm.toUpperCase()) >= 0
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export const Unwrapped = Search

export default connect(mapStateToProps)(Search)
