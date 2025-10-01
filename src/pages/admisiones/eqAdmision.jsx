import React from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./admisiones.css"

function EqAdmision() {
    return (
        <div >
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Requisitos para la admisión"} color="#000" />
            <div className='admin-page'>
            </div>


            <Footers />
        </div>
    )
}

export default EqAdmision