import React, { useEffect } from 'react'
import Footers from '../../components/footers/footers'
import Mapa from '../../components/mapasloc/mapa'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import M from 'materialize-css'

import "./contacts.css"
function Contacts() {
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
  }
    , [])
  return (
    <div>
      <Sinav />
      <BarradeNavegacion />
      <TextoTitulo texto={"Contactos y localización"} color="#000" />
      <Mapa />
      <Footers />
    </div>
  )
}

export default Contacts
