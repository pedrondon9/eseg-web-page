import React, { useEffect, useState, useContext } from 'react'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import "./allEvent.css"
import axios from 'axios'
import { DATA_EVENT_CLICK, URL_SERVER } from '../../contexts/constantesVar'
import M from 'materialize-css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Sinav from '../../components/navegacionBarAll/sideNav'
import AppContext from '../../contexts/ServiceContext'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import Footers from '../../components/footers/footers'
import Vacios from '../../components/vacio/vacios'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { format, register } from 'timeago.js';
import { AiOutlineArrowRight, AiOutlineFieldTime } from "react-icons/ai"

function AllEvent() {
    const navigate = useNavigate()

    const { dispatch, validarUser, BringEvents, allEvents, spinnerEvent } = useContext(AppContext)
    // const [allEvents, setAllEvents] = useState([])
    // const [spinnerEvent, setSpinnerEvent] = useState(false)
    const [spinnerBorrado, setSpinnerBorrar] = useState(false)


    //configuracion que permite mostrar fecha en español
    register('es_ES', (number, index, total_sec) => [
        ['justo ahora', 'ahora mismo'],
        ['hace %s segundos', 'en %s segundos'],
        ['hace 1 minuto', 'en 1 minuto'],
        ['hace %s minutos', 'en %s minutos'],
        ['hace 1 hora', 'en 1 hora'],
        ['hace %s horas', 'in %s horas'],
        ['hace 1 dia', 'en 1 dia'],
        ['hace %s dias', 'en %s dias'],
        ['hace 1 semana', 'en 1 semana'],
        ['hace %s semanas', 'en %s semanas'],
        ['hace 1 mes', 'en 1 mes'],
        ['hace %s meses', 'en %s meses'],
        ['hace 1 año', 'en 1 año'],
        ['hace %s años', 'en %s años']
    ][index]);

    const timeago = timestamp => format(timestamp, 'es_ES')

    // const BringEvents = async () => {
    //     setSpinnerEvent(true)
    //     try {
    //         const events = await axios({
    //             method: "get",
    //             url: `${URL_SERVER}/get_all_news`
    //         })
    //         if (events.data) {
    //             setAllEvents(events.data.docs)
    //             setSpinnerEvent(false)
    //             //console.log(events)

    //         } else {
    //             setAllEvents([])
    //             setSpinnerEvent(false)
    //         }
    //     } catch (error) {
    //         setSpinnerEvent(false)
    //         setAllEvents([])

    //     }

    // }

    const DataEvent = (data) => {
        dispatch({
            type: DATA_EVENT_CLICK,
            payload: data
        })
    }

    useEffect(() => {
        //BringEvents()
        if (allEvents[0]) {

        } else {
            BringEvents()
        }

        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }, [])


    return (
        <div className='allventBackg'>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto={"Todos los eventos"} color="#000" />
            <div className='container-seccion min-heightt'>
                <div className='container-seccion-resp'>
                    <div className="container-seccion-data z-depth-">
                        {!spinnerEvent ?
                            <>
                                {allEvents[0] ?
                                    <>
                                        {allEvents.map((x, y) =>

                                            <Link key={y} to={`/verEvent/${x._id}`} onClick={() => { DataEvent(x) }} className='conatainer-card'>
                                                <div className='conatainer-card-img' style={{borderTop:"1px solid #e0e0e0" }}>
                                                    {/* <img src={allEvents[0].imagen1} alt="" /> */}

                                                    <LazyLoadImage

                                                        effect="black-and-white"
                                                        src={x.linkPhoto}
                                                    />

                                                </div>
                                                <div className='conatainer-card-text'>
                                                    <p to="#">
                                                        {x.title.slice(0, 80)}.....
                                                    </p>
                                                    <div className='conatainer-card-text-time'>
                                                        <span className='conatainer-card-text-time-icon'><AiOutlineFieldTime /></span>
                                                        <span className='conatainer-card-text-time-date'>{timeago(x?.createdAt)}</span>
                                                    </div>

                                                </div>
                                                <Link className='container-card-more-info-link' to={`/verEvent/${x._id}`} >Leer más</Link>

                                            </Link>
                                        )}
                                    </>
                                    :
                                    <>
                                    <Vacios text={"Cero resultado"} />
                                    </>
                                }

                            </>
                            :
                            <SpinnerCargar />
                        }

                    </div>
                </div>
            </div>
            <Footers />
        </div>
    )
}

export default AllEvent
