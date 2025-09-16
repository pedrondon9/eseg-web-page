import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import M from "materialize-css"
import "./collectionCursos.css"


function CollapsableComp({ datos, id }) {
  
  useEffect(() => {
    const collap = document.querySelector(`.${id.slice(0,3)}`)
    M.Collapsible.init(collap, {
      preventScrolling: false,
      inDuration: 150,
    })
  })

  return (
    <div className='conatainer-collapsable-p'>
      <div className='conatainer-collapsable-p-resp'>
        <ul className={`collapsible collapsible-page ${id.slice(0,3)}`}/*inicio del colapsable del menu lateral */>
            
              {datos.map((z, a) =>

                <li key={a}>
                  <div className="collapsible-header" >
                    <span>{z.title}</span>
                  </div>
                  <div className="collapsible-body">
                    <div className="conatainer-descricion-p">
                      
                      <div
                    style={{
                      //backgroundColor: '#fff3e0',
                      //padding: '5px',
                      //borderRadius: '5px',
                      //border: "2px solid rgb(79, 79, 79)"
                    }}

                    dangerouslySetInnerHTML={{ __html: z?.description }}
                  />
                    </div>
                  </div>
                </li>
              )}
            
            
        </ul>
      </div>
    </div >
  )
}



export default CollapsableComp
