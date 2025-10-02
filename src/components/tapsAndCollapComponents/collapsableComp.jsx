import React, { useEffect, useContext, useRef } from 'react'
import { Link } from "react-router-dom"
import M from "materialize-css"
import "./tapsAndCollapComponents.css"
import axios from 'axios'
import { URL_SERVER } from '../../contexts/constantesVar'
import SpinnerCargar from '../spinnerCarga/spinnerCargar'
import { Tabs } from "@mantine/core";
import Vacios from '../vacio/vacios'
import TextoTitulo from '../textoTitle/textoTitulo'


function CollapsableComp({ path }) {

  const [data, setData] = React.useState([])
  const [nameCurso, setNameCurso] = React.useState('Artes y Humanidades')
  const [spinner, setSpinner] = React.useState(false)

  const getData = async () => {
    setSpinner(true)
    try {
      const events = await axios({
        method: "get",
        url: `${URL_SERVER}/categories/get_web/${path}`
      })
      if (events.data.success) {
        setData(events.data.response)

      } else {
        setData([])
      }
    } catch (error) {
      setData([])

    } finally {
      setSpinner(false)
    }

  }
  const handleClick = (name) => {
    setNameCurso(name)
    console.log(name)
  }
  useEffect(() => {

    getData()

  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const el = document.querySelector(".tabs");

      if (el) {
        M.Tabs.init(el, {
          swipeable: true
        });
      }

      // Collapsibles (inicializar todos los que existan)
      const collapElems = document.querySelectorAll(".collapsibleData");
      collapElems.forEach((elem) => {
        if (!elem.classList.contains("collapsible-initialized")) {
          M.Collapsible.init(elem, {
            preventScrolling: false,
            inDuration: 150,
          });
          elem.classList.add("collapsible-initialized");
        }
      });
    }
  }, [data]);




  return (
    <div className='conatainer-collapsable-p ' style={{ marginTop: "40px" }}>
      <div className='conatainer-collapsable-p-resp'>
        {!spinner ?
          <>
            <Tabs defaultValue={data[0]?.name} variant="outline" classNames={{
              tab: "px-2 py-2 text-gray-600 font-medium hover:text-blue-600",
              tabActive: "bg-blue-600 text-white rounded-lg shadow-md",
              list: "gap-1"
            }} >
              <Tabs.List grow style={{ overflowX: "auto", flexWrap: "nowrap" }}>
                {data.map((curso, i) => (
                  <Tabs.Tab key={i} onClick={() => handleClick(curso.name)} value={curso.name} style={nameCurso === curso.name ? { backgroundColor: "#F1B900" } : {}} className='tabs-boton btn-small' >
                    {curso.name}
                  </Tabs.Tab>
                ))}
              </Tabs.List>

              {data.map((curso, i) => (
                <Tabs.Panel key={i} value={curso.name}>
                  <h3>{curso.name}</h3>

                  <ul className="collapsible collapsibleData">
                    {curso?.courseschema ?
                      curso.courseschema?.map((item, index) => (
                        <li key={index}>
                          <div className="collapsible-header " >
                            <span>{item.title}  (Ver)</span>
                          </div>
                          <div className="collapsible-body">
                            <div className="container-seccion">
                              <div
                                className='container-seccion-resp'
                                style={{
                                  flexDirection: "column",
                                  backgroundColor: "#eeeeee",
                                  marginBlock:"5px",
                                  border:"1px solid #212121",
                                  borderRadius:"5PX",
                                  padding:"10px"
                                }}

                                dangerouslySetInnerHTML={{ __html: item?.description }}
                              />
                            </div>
                          </div>
                        </li>
                      ))
                      :
                      <>
                        {curso?.specialties ? <></> : <Vacios />}
                      </>
                    }

                    {curso?.specialties ?
                      curso.specialties?.map((item, index) => (
                        <li key={index}>
                          <div className="collapsible-header " >
                            <span>{item.title}

                            </span>
                          </div>
                          <div className="collapsible-body">
                            <div className="conatainer-descricion-p">
                              <div
                                style={{

                                }}

                                dangerouslySetInnerHTML={{ __html: item?.specialties }}
                              />
                            </div>
                          </div>
                        </li>
                      ))
                      :
                      <>
                        {curso?.courseschema ? <></> : <Vacios />}
                      </>

                    }

                  </ul>



                </Tabs.Panel>
              ))}
            </Tabs>
          </>
          :
          <SpinnerCargar />

        }
      </div>
    </div >
  )
}



export default CollapsableComp
