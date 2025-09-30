import React, { useEffect } from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./cursoss.css"
import { URL_SERVER } from '../../contexts/constantesVar'
import axios from 'axios'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'
import M from "materialize-css";
import CollapsableComp from '../../components/tapsAndCollapComponents/collapsableComp'

function Cursoss() {
  const [data, setData] = React.useState([])
  const [spinner, setSpinner] = React.useState(false)

  const getData = async () => {
    setSpinner(true)
    try {
      const events = await axios({
        method: "get",
        url: `${URL_SERVER}/categories/get_web/courses`
      })
      if (events.data.success) {
        setData(events.data.response)
        console.log(events.data.response)

      } else {
        setData([])
      }
    } catch (error) {
      setData([])

    } finally {
      setSpinner(false)
    }

  }
  useEffect(() => {
    getData()
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

        <CollapsableComp path={'courses'}/>

        

      <Footers />
    </div>
  )
}

export default Cursoss