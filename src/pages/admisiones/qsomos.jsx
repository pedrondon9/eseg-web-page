import React from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'

function Qsomos() {
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"¿ Quiénes somos ?"} color="#000" />
            <div className='admin-page'>
            </div>
            <Footers />
        </div>
    )
}

export default Qsomos
