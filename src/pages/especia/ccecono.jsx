import React, { useEffect } from 'react'
import "./especialidedes.css"
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import CollecEspecialidades from '../../components/collecEspecialidades/collecEspecialidadesS'
import Footers from '../../components/footers/footers'
import Sinav from '../../components/navegacionBarAll/sideNav'
import M from 'materialize-css'

function CcEcono() {
    useEffect(() => {
        const collap = document.querySelector('.collapsible')
        M.Collapsible.init(collap, {
            preventScrolling: false,
            inDuration: 150,
        })
    })
    return (
        <div>
            <Sinav/>
            <BarradeNavegacion />
            <TextoTitulo texto={"Ciencias económicas"} color="#000" />
            <CollecEspecialidades datos={[
                "Secretariodo ejecutivo y recursos humanos",
                "Administración empresarial y contabilidad informatizada",
                "Economía y comercio internacional",
                "Bancas y finanzas",
                "Economía y comercio internacional"
                ]}
                 />
            <Footers/>
        </div>
    )
}

export default CcEcono