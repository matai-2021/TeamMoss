import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
