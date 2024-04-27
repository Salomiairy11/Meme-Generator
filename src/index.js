import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Body from './Body.js'

function Index() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
