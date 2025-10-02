import React from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import AboutUs from '../../components/abaoutUs/aboutUs'

function Qsomos() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <Sinav />
            <BarradeNavegacion />

            <TextoTitulo texto={"¿ Quiénes somos ?"} color="#000" />
            <div className='admin-page'>
                <AboutUs />
            </div>
            <Footers />
        </div>
    )
}

export default Qsomos
