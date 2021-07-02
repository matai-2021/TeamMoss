import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <Route path ='/' render={({ history }) => {
        return <App history={history}/>
      }}>

      </Route>
    </Router>,
    document.getElementById('app')
  )
})
