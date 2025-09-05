import React, { useEffect } from 'react'
import CollectionCursos from '../../components/collectCursos/collectionCursos'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import "./cursoss.css"
import { URL_SERVER } from '../../contexts/constantesVar'
import axios from 'axios'
import CollapsableComp from '../../components/collectCursos/collapsableComp'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'

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

      {!spinner ?
        <>
          {data?.map((x, y) =>
            <div key={y}>
              <TextoTitulo texto={x.name} color="#000" />
              <div className='conatainer-collapsable-p'>
                <div className='conatainer-collapsable-p-resp'>
                    {x?.courseschema ?
                    <CollapsableComp datos={x.courseschema} id={x.name} />
                      :
                      <></>}

                </div>
              </div>
            </div>
          )}
        </>
        :
        <SpinnerCargar />

      }


      <Footers />
    </div>
  )
}

export default Cursoss