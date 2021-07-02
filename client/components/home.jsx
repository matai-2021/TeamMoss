import React, { useState } from 'react'

function Home (props) {
  const [dropDownValue, setdropDownValue] = useState('')
  const [isRandom, setIsRandom] = useState(true)

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
      <div className="hero-body">
        <div className="has-text-left-mobile">
          <div className="field">
            <label className="label">Select Tipper</label>
            <div className="control">
              <div className="select">
                <select onChange={handleValueChange}>
                  <option>---</option>
                  <option value={'don'}>Don</option>
                  <option value={'karel'}>Karel</option>
                  <option value={'prue'}>Prue</option>
                  <option value={'lache'}>Lache</option>
                </select>
              </div>
            </div>
            <label className="checkbox">
              <input type="checkbox" name='checkbox' checked={isRandom} onChange={handleCheckboxChange} value={isRandom} onClick={handleCheckboxClick} />
              Random Tips
            </label>
          </div>
          <div className="level-item">☎️<strong>0800 </strong><a className="button is-danger ml-4" onClick={handleButtonClick}>Call!</a></div>

        </div>
      </div>
    </div>
  )
}

export default Home
