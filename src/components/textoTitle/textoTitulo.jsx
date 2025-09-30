import React from 'react'
import "./textoT.css"

function TextoTitulo({texto,color}) {
  return (
    <div className='container-texto-p'>
        <div className='container-texto-p-resp'>
            <h4 style={{color:color}}>{texto}</h4>
        </div>
    </div>
  )
}

export default TextoTitulo