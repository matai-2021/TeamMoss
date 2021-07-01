import React, { useState } from 'react'
// import { getAllTips } from '../getAllTips'
import ShowAllTips from './ShowAllTips'

function App () {
  const [dropDownValue, setdropDownValue] = useState('')
  const [isRandom, setIsRandom] = useState(false)

  function handleButtonClick () {
    console.log(dropDownValue)
    console.log(isRandom)
  }

  function handleValueChange (event) {
    setdropDownValue(event.target.value)
  }

  function handleCheckboxChange () {
    if (isRandom === true) {
      setIsRandom(false)
    }
    if (isRandom === false) {
      setIsRandom(true)
    }
  }

  function handleCheckboxClick () {
  }

  return (
    <>
      <div>
        <ShowAllTips randomDecider={isRandom} teacher={'name'}/>

        <select onChange={handleValueChange} value={dropDownValue}>
          <option value={'Don'}>Don</option>
          <option value={'Karel'}>Karel</option>
          <option value={'Prue'}>Prue</option>
          <option value={'Laché'}>Laché</option>
        </select>
        <input type="checkbox" name='checkbox' onChange={handleCheckboxChange} value={isRandom} onClick={handleCheckboxClick}/>
        <label htmlFor='checkbox'>
            Random
        </label>
        <div>
          <button onClick={handleButtonClick}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
