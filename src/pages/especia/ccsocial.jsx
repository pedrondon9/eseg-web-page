import React, { useEffect } from 'react'
import "./especialidedes.css"
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import CollecEspecialidades from '../../components/collecEspecialidades/collecEspecialidadesS'
import Footers from '../../components/footers/footers'
import Sinav from '../../components/navegacionBarAll/sideNav'
import M from 'materialize-css'

function CcSocial() {
    useEffect(() => {
        const collap = document.querySelector('.collapsible')
        M.Collapsible.init(collap, {
            preventScrolling: false,
            inDuration: 150,
        })
    })
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Ciencias sociales"} color="#000" />
            <CollecEspecialidades
                datos={[
                    "Relaciones internacionales y diplomacia",
                    "Periodismo y comunicacion audiovisual",
                    "Protocolo diplomático",
                    "Turismo y cominicación"
                ]}
            />
            <Footers />
        </div>
    )
}

export default CcSocial