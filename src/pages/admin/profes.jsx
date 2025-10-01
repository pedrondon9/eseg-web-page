import React, { useContext, useEffect, useState } from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import Vacios from '../../components/vacio/vacios'
import AppContext from '../../contexts/ServiceContext'

import "./admins.css"

function Profes() {
    const { allProfes, spinnerProfes, BringProfes } = useContext(AppContext)

    useEffect(() => {
        if (allProfes[0]) {

        } else {
            BringProfes()
        }
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });

    }, [])
    return (
        <div style={{backgroundColor:"#f5f5f5"}}>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Profesores"} color="#000" />
            <div className='admin-page'>

                <div className='conatainer-admin-card-p'>
                    <div className='conatainer-admin-card-p-resp'>

                        {!spinnerProfes ?
                            <>
                                {allProfes[0] ?
                                    <>
                                        {
                                            allProfes.map((x, y) =>
                                                <div className='admin-card'>
                                                    <div className='admin-card-img'>
                                                        <img src={x?.linkPhoto} alt="" />
                                                    </div>
                                                    <div className='admin-card-text'>
                                                        <h6 className='nombre'>{/*<span className="text-span-puesto">Nombre : </span>*/}{x?.fullname}</h6>
                                                        <h6 className='puesto'>{/* <span className="text-span-puesto">Puesto : </span>*/}{x?.position}</h6>
                                                        <p>{/*<span className="text-edu">Educación : </span>*/}<span className="text-edu-cont">{x?.brief_description}</span></p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                    :
                                    <Vacios />

                                }

                            </> :
                            <>
                                <SpinnerCargar />
                            </>

                        }

                    </div>
                </div>
            </div>
            <Footers />
        </div>
    )
}

export default Profes
