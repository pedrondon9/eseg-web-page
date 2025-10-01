import React, { useContext, useEffect, useState } from 'react'
import Footers from '../../components/footers/footers'
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import Sinav from '../../components/navegacionBarAll/sideNav'
import "./allvideos.css"
import AppContext from '../../contexts/ServiceContext'
import ReactPlayer from 'react-player'
import { BsPlayCircleFill } from 'react-icons/bs'
import { ID_VIDEOS } from '../../contexts/constantesVar'
import { Link, NavLink } from 'react-router-dom'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'
import TextoTitulo from '../../components/textoTitle/textoTitulo'


function AllVideos() {
    const { dispatch, spinnerVideos, allVideos, BringAllVideos, IdVideo } = useContext(AppContext)
    const [id, setId] = useState("")

    console.log("id", IdVideo)

    const VideoPlay = () => {
        return (
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${IdVideo}`}
                width={"100%"}
                /*height={"100%"}*/
                playing={true}
                controls={true}

            />
        )
    }

    useEffect(() => {
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <Sinav />
            <BarradeNavegacion />
            <TextoTitulo texto="Videos" color="#000" />

            <div className='container-seccion'>
                <div className='container-seccion-resp'>
                    <div className='container-all-videos-play'>
                        {IdVideo ?
                            <VideoPlay />
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
            <div className='container-seccion'>
                <div className='container-seccion-resp'>

                    <div className='container-all-videos-list'>
                        {!spinnerVideos ?
                            <>
                                {allVideos[0] ?
                                    <>
                                        {allVideos.map((x, y) =>
                                            <Link
                                                key={y}
                                                to="#!"
                                                style={x.id.videoId == id ? { backgroundColor: "#212121" } : { backgroundColor: "#000000" }}
                                                className='card-video-play'
                                                onClick={() => {
                                                    dispatch({
                                                        type: ID_VIDEOS,
                                                        payload: x.id.videoId
                                                    })
                                                    setId(x.id.videoId)
                                                }}


                                            >
                                                <div className='video-playy'>
                                                    <img src={x.snippet.thumbnails.high.url} alt="" srcset="" />
                                                </div>
                                                <div className="video-title">
                                                    <p>{x.snippet.description}</p>
                                                </div>
                                            </Link>

                                        )}

                                    </>
                                    :
                                    <>
                                    </>
                                }
                            </>
                            :
                            <>
                                <SpinnerCargar />
                            </>
                        }



                    </div>
                </div>
            </div>
            <Footers />
        </div>

    )
}

export default AllVideos