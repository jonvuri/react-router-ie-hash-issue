import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

const App = () => <div id='app'><a href="#hash">Go to hash</a></div>

const onChange = (_, newInfo) =>
  console.log('hash changed: ', newInfo.location.hash)

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App } onChange={ onChange } />
  </Router>,
  document.getElementById('root')
)
