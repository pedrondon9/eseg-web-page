import React from 'react'
import "./vacios.css"
function Vacios({ text }) {
  return (
    <div className='container-seccion'>
      <div className='container-seccion-resp'>
          <h6 >{text}</h6>
      </div>
    </div>
  )
}

export default Vacios
