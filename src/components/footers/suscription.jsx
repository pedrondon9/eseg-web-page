import React from 'react'
import "./suscription.css"

function Suscription() {
  return (
    <div className='container-suscription-p'>
      <div className='container-suscription-p-resp'>
        
        <div className='suscription-input '>
            <form >
                <input placeholder='Tu correo' type="email" name="input" id="input" />
                <button className='btn-small' type="submit">Suscribirse</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Suscription
