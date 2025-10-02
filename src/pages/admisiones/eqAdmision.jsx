import React from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./admisiones.css"
import AdmissionRequirements from '../../components/admissionRequirements/admissionRequirements'

function EqAdmision() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <BarradeNavegacion />
            <Sinav />

                <TextoTitulo texto={"Requisitos de Admisión"} color="#000" />
                <div className='admin-page'>
                    <AdmissionRequirements />

                </div>

            <Footers />
        </div>
    )
}

export default EqAdmision