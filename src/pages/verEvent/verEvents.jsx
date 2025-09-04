import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "./verEvents.css"
import AppContext from '../../contexts/ServiceContext'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Footers from '../../components/footers/footers'
import Sinav from '../../components/navegacionBarAll/sideNav'
import { LazyLoadImage } from 'react-lazy-load-image-component'


function VerEvents() {
  const navigate = useNavigate()

  const { dataEvent } = useContext(AppContext)


  useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });

  }, [])



  return (
    <>
      <Sinav />
      <BarradeNavegacion />
      <div className='conatiner-ver-evento-p'>
        <div className='conatiner-ver-evento-p-resp'>
          <div className='evento-title'>
            <h4>{dataEvent?.title}</h4>
          </div>
          <div className='evento-autor'>
            <p><span>Autor</span> : {dataEvent.autor}</p>
          </div>
          <div className='evento-foto'>
            {/* <img src={dataEvent.imagen1} alt="" srcset="" /> */}
            <LazyLoadImage
              effect="black-and-white"
              src={dataEvent?.linkPhoto}
            />
          </div>
          <div className='evento-descrip'>
            {dataEvent?.content  ? (
              <div
                style={{
                  //backgroundColor: '#fff3e0',
                  //padding: '5px',
                  //borderRadius: '5px',
                  //border: "2px solid rgb(79, 79, 79)"
                }}

                dangerouslySetInnerHTML={{ __html: dataEvent?.content }  }
              />
            ) : (
              <p>No hay descripción disponible.</p>
            )}
          </div>
        </div>
      </div>
      <Footers />
    </>
  )
}


export default VerEvents
