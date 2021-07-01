import React, { useEffect } from 'react'


function App (props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default App
