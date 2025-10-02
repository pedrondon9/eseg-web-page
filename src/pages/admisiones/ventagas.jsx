import React from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import Advantages from '../../components/advantages/advantages'

function Ventagas() {
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Ventajas de Estudiar en la E.S.E.G."} color="#000" />
            <div className='admin-page'>
                <Advantages />
            </div>
            <Footers />
        </div>
    )
}

export default Ventagas