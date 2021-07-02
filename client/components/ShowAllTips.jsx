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
      <div className="columns is-centered is-vcentered is-mobile mt-4">
        <div></div>
        <div className="column is-two-thirds">
          <section>
            <p className="title">🧙 {teacher} Says:</p>
          </section>
          <section className="content is-large">
            {
              props.randomDecider === true
                ? (<div className="card m-4">
                  <div className="card-content">
                    <div className="content">
                      {randomTip}
                    </div>
                  </div>
                </div>)

                : (<div>
                  {tips.map(tip =>
                    (<div key='tip' className="card m-4">
                      <div className="card-content">
                        <div className="content">
                          {tip}
                        </div>
                      </div>
                    </div>)
                  )}
                </div>
                )
            }
          </section>
        </div>
        <div></div>
      </div>

    </div>
  )
}

export default ShowAllTips
