import React from 'react'
import CollectionCursos from '../../components/collectCursos/collectionCursos'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./cursoss.css"

function Sociales() {
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Sociales"} color="#000" />
            <CollectionCursos

                datos={[
                    "Valor del trabajo",
                    "Redacción administrativa",
                    "Oratoría diplomática",
                    "Comunicacíon",
                    "Comunicacíon",
                    "Comunicacíon"
                ]}
            />
            <Footers />
        </div>
    )
}

export default Sociales