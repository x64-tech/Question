import React, { useState } from 'react'
import Caxios from '../extras/Caxios'

const QuestionCat = (props) => {
  const [reqINT, setreqINT] = useState({
    loading: false,
    success: false,
    error: ""
  })

  const handleClick = (e) => {
    setreqINT({
      loading: true,
      success: false,
      error: ""
    })
    Caxios(null).get(`/ques/${e.target.value}`)
      .then(res => {
        props.setQuestion(res.data);
        setreqINT({
          loading: false,
          success: true,
          error: ""
        })
      }).catch(err => {
        console.log(err);
        setreqINT({
          loading: false,
          success: false,
          error: err.response.data.message
        })
      })
  }

  return (
    <div className='mb-3'>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
          onClick={handleClick} value="latest" />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">Latest</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
          onClick={handleClick} value="unanswred" />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">Unanswred</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
          onClick={handleClick} value="trending" />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">Top</label>
      </div>
    </div>
  )
}

export default QuestionCat