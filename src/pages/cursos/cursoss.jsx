import React,{useEffect} from 'react'
import CollectionCursos from '../../components/collectCursos/collectionCursos'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./cursoss.css"

function Cursoss() {

  useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
    <div>
      <Sinav />
      <BarradeNavegacion />


      <TextoTitulo texto={"Idiomas"} color="#000" />
      <CollectionCursos
        datos={[
          "Francés",
          "Inglés",
          "Portugués",
          "Chino"
        ]}
        id='idiomas'
      />




      <TextoTitulo texto={"Paquete office"} color="#000" />
      <CollectionCursos

        datos={[
          "Word",
          "Exeel",
          "Acces",
          "Publisher"
        ]}

        id='office'
      />




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

        id='sociales'
      />




      <TextoTitulo texto={"Economia"} color="#000" />
      <CollectionCursos
        datos={[
          "Finanzas públicas",
          "Auditoría",
        ]}
        id='economia'
      />

      <Footers />
    </div>
  )
}

export default Cursoss