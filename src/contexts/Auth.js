import React, { useReducer, useState } from "react"
import AppContext from "./ServiceContext";
import { InitialState } from './InitialState';
import AppReducer from "./AppReducer";
import axios from "axios";
import M from "materialize-css";

import { URL_SERVER, SCHOOL_TENANT } from "./constantesVar";



export default (props) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);
    const [allPerson, setAllPerson] = useState([])
    const [allProfes, setAllProfes] = useState([])

    const [spinnerPerson, setSpinnerPerson] = useState(false)
    const [spinnerProfes, setSpinnerProfes] = useState(false)

    const [allEvents, setAllEvents] = useState([])
    const [spinnerEvent, setSpinnerEvent] = useState(false)


    const [allVideos, setAllVideos] = useState([])
    const [spinnerVideos, setSpinnerVideos] = useState(false)


    const BringPerson = async () => {
        setSpinnerPerson(true)
        try {
            const events = await axios({
                method: "get",
                url: `${URL_SERVER}/users/get_web/admin`,
                headers: {
                    'x-tenant-id': SCHOOL_TENANT
                }
            })
            console.log(events)
            if (events.data.success) {
                setAllPerson(events.data.response)
                setSpinnerPerson(false)
                //console.log(events)

            } else {
                setAllPerson([])
                setSpinnerPerson(false)
            }
        } catch (error) {
            setSpinnerPerson(false)
            setAllPerson([])

        }

    }


    /************************************************** */
    const BringProfes = async () => {
        setSpinnerProfes(true)
        try {
            const events = await axios({
                method: "get",
                url: `${URL_SERVER}/users/get_web/teacher`,
                headers: {
                    'x-tenant-id': SCHOOL_TENANT
                }
            })
            if (events.data.success) {
                setAllProfes(events.data.response)
                setSpinnerProfes(false)
                //console.log(events)

            } else {
                setAllProfes([])
                setSpinnerProfes(false)
            }
        } catch (error) {
            setSpinnerProfes(false)
            setAllProfes([])

        }

    }

    /*********************************************************************** */
    const BringEvents = async () => {
        setSpinnerEvent(true)
        try {
            const events = await axios({
                method: "get",
                url: `${URL_SERVER}/events/get`,
                headers: {
                    'x-tenant-id': SCHOOL_TENANT
                }
            })
            if (events.data.success) {
                setAllEvents(events.data.response.docs)
                setSpinnerEvent(false)
                console.log(events)

            } else {
                setAllEvents([])
                setSpinnerEvent(false)
            }
        } catch (error) {
            setSpinnerEvent(false)
            setAllEvents([])
        }

    }

    const BringAllVideos = async () => {
        setSpinnerVideos(true)
        const urlVideos = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCt_FpZJ-Kg-7DquVV2hvVJQ&maxResults=100&order=date&key=AIzaSyAhh6VqpXvhmvrxF-GRLRlJfL37sgJp-K4"
        try {
            const events = await axios({
                method: "get",
                url: `${urlVideos}`,
            })
            //console.log(events.data.items)
            if (events.data.items) {
                setAllVideos(events.data.items)
                setSpinnerVideos(false)
                //console.log(events)

            } else {
                setAllVideos([])
                setSpinnerVideos(false)
            }
        } catch (error) {
            setSpinnerVideos(false)
            setAllVideos([])

        }

    }
    return (
        <AppContext.Provider value={{
            dispatch,
            dataEvent: state.dataEvent,//data del evento al hacer click
            BringPerson,
            BringProfes,
            BringAllVideos,
            allPerson: allPerson,
            spinnerPerson: spinnerPerson,
            allProfes: allProfes,
            spinnerProfes: spinnerProfes,
            BringEvents,
            allEvents: allEvents,
            spinnerEvent: spinnerEvent,
            dataEvent: state.dataEvent,
            spinnerVideos: spinnerVideos,
            allVideos: allVideos,
            IdVideo: state.IdVideo,

        }}>
            {props.children}
        </AppContext.Provider>
    )
};

