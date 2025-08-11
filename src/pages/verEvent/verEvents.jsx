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
            <h4>{dataEvent.titulo}</h4>
          </div>
          <div className='evento-autor'>
            <p><span>Autor</span> : {dataEvent.autor}</p>
          </div>
          <div className='evento-foto'>
            {/* <img src={dataEvent.imagen1} alt="" srcset="" /> */}
            <LazyLoadImage
              effect="black-and-white"
              src={dataEvent.imagen1} 
            />
          </div>
          <div className='evento-descrip'>
            <h6>{dataEvent.descripcion}</h6>
          </div>
        </div>
      </div>
      <Footers />
    </>
  )
}


export default VerEvents
