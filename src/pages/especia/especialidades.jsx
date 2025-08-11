import React, { useEffect } from 'react'
import "./especialidedes.css"
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import CollecEspecialidades from '../../components/collecEspecialidades/collecEspecialidadesS'
import Footers from '../../components/footers/footers'
import Sinav from '../../components/navegacionBarAll/sideNav'
import M from 'materialize-css'

function Especialidades() {
    useEffect(() => {
        const collap = document.querySelector('.collapsible')
        M.Collapsible.init(collap, {
            preventScrolling: false,
            inDuration: 150,
        })

        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    })
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />


            <TextoTitulo texto={"Tecnología-Redes informaticas"} color="#000" />
            <CollecEspecialidades datos={[
                "Redes y telecomunicación",
                "Informática y programación",
                "Electricidad y electronica industrial"
            ]} 
            id="tecnologia"
            />


            <TextoTitulo texto={"Ciencias económicas"} color="#000" />
            <CollecEspecialidades datos={[
                "Secretariodo ejecutivo y recursos humanos",
                "Administración empresarial y contabilidad informatizada",
                "Economía y comercio internacional",
                "Bancas y finanzas",
                "Economía y comercio internacional"
            ]}
            id="ceconomicas"
            />



            <TextoTitulo texto={"Ciencias sociales"} color="#000" />
            <CollecEspecialidades
                datos={[
                    "Relaciones internacionales y diplomacia",
                    "Periodismo y comunicacion audiovisual",
                    "Protocolo diplomático",
                    "Turismo y cominicación"
                ]}

                id="csociales"
            />




            <TextoTitulo texto={"Medicina"} color="#000" />
            <CollecEspecialidades datos={[
                "Turismo y cominicación",
                "Laboratorio",
            ]}
            id="medicina"
            />
            <Footers />
        </div>
    )
}

export default Especialidades