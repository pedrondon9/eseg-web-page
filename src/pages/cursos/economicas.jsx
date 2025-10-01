import React from 'react'
import CollectionCursos from '../../components/import "./tapsAndCollapComponents.css"/collectionCursos'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./cursoss.css"

function Economicas() {
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Economia"} color="#000" />
            <CollectionCursos
                datos={[
                    "Finanzas públicas",
                    "Auditoría",
                ]}
            />
            <Footers />
        </div>
    )
}

export default Economicas