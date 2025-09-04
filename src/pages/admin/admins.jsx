import React, { useState, useEffect, useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import Vacios from '../../components/vacio/vacios'
import AppContext from '../../contexts/ServiceContext'

import "./admins.css"

function Admins() {
    const { BringPerson, allPerson, spinnerPerson } = useContext(AppContext)

    useEffect(() => {
        if (allPerson[0]) {
        } else {
            BringPerson()
        }
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });

    }, [])
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Personal administrativo"} color="#000" />
            <div className='conatainer-admin-card-p'>
                <div className='conatainer-admin-card-p-resp'>
                    {!spinnerPerson ?
                        <>
                            {allPerson[0] ?
                                <>
                                    {
                                        allPerson.map((x, y) =>
                                            <div className='admin-card'>
                                                <div className='admin-card-img'>
                                                    {/* <img src={x.imagen1} alt="" /> */}
                                                    <LazyLoadImage
                                                        effect="black-and-white"
                                                        src={x.linkPhoto}
                                                    />
                                                </div>
                                                <div className='admin-card-text'>
                                                    <h6 className='nombre'>{/*<span className="text-span-puesto">Nombre : </span>*/}{x.fullname}</h6>
                                                    <h6 className='puesto'>{/* <span className="text-span-puesto">Puesto : </span>*/}{x.position}</h6>
                                                    <p>{/*<span className="text-edu">Educación : </span>*/}<span className="text-edu-cont">{x.brief_description}</span></p>
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
            <Footers />
        </div>
    )
}

export default Admins
