import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        onChange={this.props.handleSearchTermChange}
        value={this.props.searchTerm}
        type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            video streaming thing
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool ,string } = React.PropTypes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

// export default Header
{/* <header>
  <h1>video streaming thing</h1>
  <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
</header> */}
