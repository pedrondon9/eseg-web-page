import React, { useState, useEffect, useContext } from 'react'
import "./seccion1.css"
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineFieldTime } from "react-icons/ai"
import axios from 'axios'
import { DATA_EVENT_CLICK, URL_SERVER } from '../../contexts/constantesVar'
import AppContext from '../../contexts/ServiceContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SpinnerCargar from '../spinnerCarga/spinnerCargar'
import { format, register } from 'timeago.js';
import { FaTimes, FaTimesCircle } from 'react-icons/fa'
import Vacios from '../vacio/vacios'
import TextoTitulo from '../textoTitle/textoTitulo'


function Seccion1() {
    const { dispatch, BringEvents, allEvents, spinnerEvent } = useContext(AppContext)
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

    //<span>{timeago(`${x["fecha"]}`)}</span>


    const DataEvent = (data) => {
        dispatch({
            type: DATA_EVENT_CLICK,
            payload: data
        })
    }

    useEffect(() => {
        if (allEvents[0]) {

        } else {
            BringEvents()
        }

    }, [])
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <TextoTitulo texto={"Actualidad"} color="#000" />

            <div className='container-seccion'>
                <div className='container-seccion-resp'>
                    <div className="container-seccion-data z-depth-">
                        {!spinnerEvent ?
                            <>
                                {allEvents?.[0] ?
                                    <>
                                        {
                                            allEvents?.slice(0, 4).map((x, y) =>
                                                <Link key={y} to={`/verEvent/${x._id}`} onClick={() => { DataEvent(x) }} className='conatainer-card'>
                                                    <div className='conatainer-card-img' style={{borderTop:"1px solid #e0e0e0"}}>
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
                                                    <Link className ='container-card-more-info-link'to={`/verEvent/${x._id}`} >Leer más</Link>

                                                </Link>
                                            )
                                        }
                                    </>
                                    :
                                    <Vacios text={"Cero resultado"} />
                                }


                            </>
                            :
                            <>
                                <SpinnerCargar color={"#005197"} />
                            </>
                        }

                    </div>
                </div>

            </div>
            <div className='container-link-all-news'>
                <Link to={"/allEvent"}><span>Ver todos los eventos</span><AiOutlineArrowRight size={25} color="#000" /> </Link>
            </div>
        </div>
    )
}

export default Seccion1