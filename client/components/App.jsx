import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
// import { getAllTips } from '../getAllTips'
import ShowAllTips from './ShowAllTips'

import Home from './home'

function App (props) {
  const [isRandom, setIsRandom] = useState(true)
  useEffect(() => {
    console.log(isRandom)
  }, [isRandom])

  return (
    <>
      <div>
        <Route exact path='/' render={() => <Home history={props.history} setFunction={setIsRandom} />}/>
        <Route exact path='/tips/:name' render={() => <ShowAllTips randomDecider={isRandom}/>} />
      </div>
    </>
  )
}

export default App
