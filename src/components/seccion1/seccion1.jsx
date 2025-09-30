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
        <>
            <div className='container-seccion1-p'>
                <div className='container-seccion1-p-resp'>
                    <div className="conatainer-seccion1 z-depth-">
                        {!spinnerEvent ?
                            <>
                                {allEvents ?
                                    <>
                                        {
                                            allEvents?.slice(0, 4).map((x, y) =>
                                                <Link key={y} to={`/verEvent/${x._id}`} onClick={() => { DataEvent(x) }} className='card conatainer-seccion1-l'>
                                                    <div className='conatainer-seccion1-l-img'>
                                                        {/* <img src={allEvents[0].imagen1} alt="" /> */}

                                                        <LazyLoadImage

                                                            effect="black-and-white"
                                                            src={x.linkPhoto}
                                                        />


                                                    </div>
                                                    <div className='conatainer-seccion1-l-text'>
                                                        <div className='conatainer-seccion1-l-text-time'>
                                                            <span className='conatainer-seccion1-l-text-time-icon'><AiOutlineFieldTime /></span>
                                                            <span className='conatainer-seccion1-l-text-time-date'>{timeago(x?.createdAt)}</span>
                                                        </div>
                                                        <p to="#">
                                                            {x.title.slice(0, 80)}.....
                                                        </p>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    </>
                                    :
                                    <Vacios />
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
                <Link to={"/allEvent"}><span>Ver todos los eventos</span><AiOutlineArrowRight size={30} color="#000" /> </Link>
            </div>
        </>
    )
}

export default Seccion1