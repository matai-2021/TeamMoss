import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
// import { getAllTips } from '../getAllTips'
import ShowAllTips from './ShowAllTips'

import Home from './home'

function App (props) {
  const [isRandom, setIsRandom] = useState(false)
  useEffect(() => {
    console.log(isRandom)
  }, [isRandom])

  return (

    <div>
      <main className="hero">
        <header className="hero-head has-background-warning p-6">
          <p className="title  has-text-link has-text-centered">
            ☎️ Hot Tip Hotline ☎️
          </p>
          <p className="subtitle has-text-centered has-text-danger">
            🔥🔥 Call now to get THE HOTTEST Tips around🔥🔥
          </p>
        </header>
      </main>
      <Route exact path='/' render={() => <Home history={props.history} setFunction={setIsRandom} />} />
      <Route exact path='/tips/:name' render={() => <ShowAllTips randomDecider={isRandom} />} />
    </div>

  )
}

export default App
