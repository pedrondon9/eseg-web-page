import React from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import InternalRules from '../../components/internalRules/internalRules'

function Reglamento() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <Sinav />
            <BarradeNavegacion />
            
            <TextoTitulo texto={"Reglamento interno"} color="#000" />
            <div className='admin-page'>
                <InternalRules />
            </div>
            <Footers />
        </div>
    )
}

export default Reglamento