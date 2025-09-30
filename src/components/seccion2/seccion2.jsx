import React, { useContext, useEffect } from 'react'
import "./seccion2.css"
import TextoTitulo from '../textoTitle/textoTitulo'
import ReactPlayer from 'react-player'
import { Link, NavLink } from 'react-router-dom'
import { BsPlayCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from "react-icons/ai"
import AppContext from '../../contexts/ServiceContext'
import SpinnerCargar from '../spinnerCarga/spinnerCargar'
import { ID_VIDEOS } from '../../contexts/constantesVar'

function Seccion2() {
    const { dispatch, spinnerVideos, allVideos, BringAllVideos } = useContext(AppContext)

    const GetAllVideos = async () => {
        console.log(allVideos)
        if (allVideos[0]) {
            console.log(allVideos)
        } else {
            BringAllVideos()
        }
        //console.log(allVideos[0].id.videoId)
    }
    useEffect(() => {
        GetAllVideos()
    }, [])
    return (
        <div className='container-seccion2-p'>
            <TextoTitulo texto="Videos" color="#000" />
            <div className='container-seccion2-p-resp'>
                <div className='container-seccion2-card-video'>
                    {!spinnerVideos ?
                        <>
                            {allVideos[0] ?
                                <>
                                    {allVideos.slice(0, 4).map((x, y) =>
                                        <NavLink
                                            key={y}
                                            to="/allvideos"
                                            className="container-card-video"
                                            onClick={() => {
                                                dispatch({
                                                    type: ID_VIDEOS,
                                                    payload: x.id.videoId,
                                                });
                                            }}
                                        >
                                            <div className="card-video">
                                                <img
                                                    src={`https://img.youtube.com/vi/${x.id.videoId}/hqdefault.jpg`}
                                                    alt={x.snippet.title}
                                                    className="video-thumbnail"
                                                />
                                                <div className="play-overlay">
                                                    <BsPlayCircleFill size={60} color="#fff" />
                                                </div>
                                            </div>

                                            <div className="card-title">
                                                <p>{x.snippet.description}</p>
                                            </div>
                                        </NavLink>
                                    )}

                                </>
                                :
                                <>
                                </>
                            }
                        </>
                        :
                        <>
                            <SpinnerCargar color={"#fff"} />
                        </>
                    }

                </div>
            </div>
            <div className='container-link-all-video'>
                <Link onClick={() => {
                    dispatch({
                        type: ID_VIDEOS,
                        payload: ""
                    })
                }}
                    to={"/allvideos"}><span>Ver todos los videos</span>
                    <AiOutlineArrowRight size={25} color="#000" />
                </Link>
            </div>
        </div>
    )
}

export default Seccion2