import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getAllTips } from '../apis/getAllTips'

function ShowAllTips (props) {
  const [tips, setTips] = useState([])

  const teacher = useParams().name

  useEffect(() => {
    getAllTips()
      .then(results => {
        setTips(results[teacher])
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const randomTip = tips[Math.floor(Math.random() * (tips.length))]

  return (
    <div>

      <h1>{teacher} says :</h1>

      {
        props.randomDecider === true
          ? (<h3>{randomTip}</h3>)

          : (<ul>
            {tips.map(tip =>
              (<li key={tip}>{tip}</li>)
            )}
          </ul>
          )
      }

    </div>
  )
}

export default ShowAllTips
