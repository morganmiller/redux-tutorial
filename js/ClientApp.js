import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title="yoooo" color="rebeccapurple" />
        <MyTitle title="hellooo" color="cyan" />
        <MyTitle title="hiya" color="thistle" />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent),
  document.getElementById('app')
)
