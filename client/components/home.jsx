import React, { useState } from 'react'

function Home (props) {
  const [dropDownValue, setdropDownValue] = useState('')
  const [isRandom, setIsRandom] = useState(false)

  function handleButtonClick () {
    props.history.push(`/tips/${dropDownValue}`)
  }

  function handleValueChange (event) {
    setdropDownValue(event.target.value)
  }

  function handleCheckboxChange () {
    if (isRandom === true) {
      setIsRandom(false)
      props.setFunction(false)
    }
    if (isRandom === false) {
      setIsRandom(true)
      props.setFunction(true)
    }
  }

  function handleCheckboxClick () {
  }

  return (
    <div>
      <select onChange={handleValueChange} value={dropDownValue}>
        <option value={'don'}>Don</option>
        <option value={'karel'}>Karel</option>
        <option value={'prue'}>Prue</option>
        <option value={'lache'}>Lache</option>
      </select>
      <input type="checkbox" name='checkbox' onChange={handleCheckboxChange} value={isRandom} onClick={handleCheckboxClick}/>
      <label htmlFor='checkbox'>
            Random
      </label>
      <div>
        <button onClick={handleButtonClick}>Submit</button>
      </div>
    </div>
  )
}

export default Home
