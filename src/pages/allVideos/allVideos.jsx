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

    useEffect(()=>{
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    },[])

    return (
        <>
            <Sinav />
            <BarradeNavegacion />
            <div className='container-all-videos-p'>
                <div className='container-all-videos-s-respon'>
                    <div className='container-all-videos-play'>
                        {IdVideo?
                            <VideoPlay />
                            :
                            <></>
                        }
                    </div>
                    <div className='container-all-videos-list'>
                        {!spinnerVideos ?
                            <>
                                {allVideos[0] ?
                                    <>
                                        {allVideos.slice(0, 4).map((x, y) =>
                                            <Link
                                                key={y}
                                                to="#!"
                                                style={ x.id.videoId == id ? { backgroundColor: "#212121" } : { backgroundColor: "#000000" }}
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
        </>

    )
}

export default AllVideos