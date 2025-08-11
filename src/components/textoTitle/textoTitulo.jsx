import React from 'react'
import "./textoT.css"

function TextoTitulo({texto,color}) {
  return (
    <div className='container-texto-p'>
        <div className='container-texto-p-resp'>
            <h5 style={{color:color}}>{texto}</h5>
        </div>
    </div>
  )
}

export default TextoTitulo