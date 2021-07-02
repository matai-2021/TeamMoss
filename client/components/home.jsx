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
      <div >

        <div className="field ">
          <label className="label level-item is-large">0800-</label>

          <div className="control">
            <div className="select level-item  is-large">
              <select onChange={handleValueChange}>
                <option>---</option>
                <option value={'don'}>Don</option>
                <option value={'karel'}>Karel</option>
                <option value={'prue'}>Prue</option>
                <option value={'lache'}>Lache</option>
              </select>
            </div>
          </div>
          <label className="checkbox level-item">
            <input type="checkbox" name='checkbox' checked={isRandom} onChange={handleCheckboxChange} value={isRandom} onClick={handleCheckboxClick} />
            <p className="content is-large">Random Tips</p>
          </label>
        </div>
        <div className="level-item"><a className="button is-danger ml-4 is-large" onClick={handleButtonClick}>☎️ Call!</a></div>

      </div>
    </div>
  )
}

export default Home
