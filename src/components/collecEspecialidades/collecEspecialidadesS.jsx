import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import M from "materialize-css"
import "./collap.css"
function CollecEspecialidades({ datos,id}) {
  useEffect(() => {
    const collap = document.querySelector(`.${id}`,)
    M.Collapsible.init(collap, {
      preventScrolling: false,
      inDuration: 150,
    })
  })
  return (
    <div className='conatainer-collapsable-p'>
      <div className='conatainer-collapsable-p-resp'>
        <ul  className={`collapsible collapsible-page ${id}`}/*inicio del colapsable del menu lateral */>
          {datos[0] ?
            <li>
              <div className="collapsible-header" >
                <span>{datos[0]}</span>
              </div>
              <div className="collapsible-body">
                <div className="conatainer-descricion-p">

                </div>
              </div>
            </li>
            :
            <></>}

          {datos[1] ?
            <li>
              <div className="collapsible-header" >
                <span>{datos[1]}</span>
              </div>
              <div className="collapsible-body">
                <div className="conatainer-descricion-p">

                </div>
              </div>
            </li>
            :
            <></>}


          {datos[2] ?
            <li>
              <div className="collapsible-header" >
                <span>{datos[2]}</span>
              </div>
              <div className="collapsible-body">
                <div className="conatainer-descricion-p">

                </div>
              </div>
            </li>
            :
            <></>}


          {datos[3] ?
            <li>
              <div className="collapsible-header" >
                <span>{datos[3]}</span>
              </div>
              <div className="collapsible-body">
                <div className="conatainer-descricion-p">

                </div>
              </div>
            </li>
            :
            <></>}


          {datos[4] ?
            <li>
              <div className="collapsible-header" >
                <span>{datos[4]}</span>
              </div>
              <div className="collapsible-body">
                <div className="conatainer-descricion-p">

                </div>
              </div>
            </li>
            :
            <></>}

        </ul>
      </div>
    </div >
  )
}

export default CollecEspecialidades
