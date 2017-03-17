import React from 'react'
const { shape, string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: { // propTypes is only used as a development tool, are not checked in production
    show: shape({
      poster: string,
      title: string,
      year: string,
      description: string
    })
  },
  render () {
    const { poster, title, year, description } = this.props.show // destructuring
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
