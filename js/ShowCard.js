import React from 'react'

const ShowCard = React.createClass({
  render () {
    const { poster, title, year, description } = this.props.show //destructuring
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
