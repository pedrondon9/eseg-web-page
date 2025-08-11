import React from 'react'
import Footers from '../../components/footers/footers'
import Mapa from '../../components/mapasloc/mapa'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./contacts.css"
function Contacts() {
  return (
    <div>
      <Sinav/>
      <BarradeNavegacion/>
      <TextoTitulo texto={"Contactos y localización"} color="#000"/>
      <Mapa/>
      <Footers/>
    </div>
  )
}

export default Contacts
