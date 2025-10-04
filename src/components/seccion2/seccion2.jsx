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
        if (allVideos[0]) {
        } else {
            BringAllVideos()
        }
        //console.log(allVideos[0].id.videoId)
    }
    useEffect(() => {
        GetAllVideos()
    }, [])
    return (
        <div style={{ backgroundColor: "#fff" }}>
            <TextoTitulo texto="Videos" color="#000" />

            <div className='container-seccion'>
                <div className='container-seccion-resp'>
                    <div className='container-seccion-data'>
                        {!spinnerVideos ?
                            <>
                                {allVideos[0] ?
                                    <>
                                        {allVideos.slice(0, 4).map((x, y) =>
                                            <NavLink
                                                key={y}
                                                to="/allvideos"
                                                className="conatainer-card"
                                                onClick={() => {
                                                    dispatch({
                                                        type: ID_VIDEOS,
                                                        payload: x.id.videoId,
                                                    });
                                                }}
                                            >
                                                <div className="conatainer-card-img">
                                                    <img
                                                        src={`https://img.youtube.com/vi/${x.id.videoId}/hqdefault.jpg`}
                                                        alt={x.snippet.title}
                                                        className="video-thumbnail"
                                                    />
                                                    <div className="play-overlay">
                                                        <BsPlayCircleFill size={60} color="#fff" />
                                                    </div>
                                                </div>

                                                <div className="conatainer-card-text">
                                                    <p>{x.snippet.description}</p>
                                                </div>
                                                <Link

                                                    onClick={() => {
                                                        dispatch({
                                                            type: ID_VIDEOS,
                                                            payload: x.id.videoId,
                                                        });
                                                    }}
                                                    className='container-card-more-info-link'
                                                    to="/allvideos"
                                                >Ver</Link>

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