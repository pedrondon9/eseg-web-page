import React, { useEffect } from 'react'
import "./especialidedes.css"
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import Footers from '../../components/footers/footers'
import Sinav from '../../components/navegacionBarAll/sideNav'
import M from 'materialize-css'
import axios from 'axios'
import { URL_SERVER } from '../../contexts/constantesVar'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'
import CollapsableComp from '../../components/tapsAndCollapComponents/collapsableComp'

function Especialidades() {
    const [data, setData] = React.useState([])
    const [spinner, setSpinner] = React.useState(false)
    const getData = async () => {
        setSpinner(true)
        try {
            const events = await axios({
                method: "get",
                url: `${URL_SERVER}/categories/get_web/specialties`
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
        const collap = document.querySelector('.collapsible')
        M.Collapsible.init(collap, {
            preventScrolling: false,
            inDuration: 150,
        })

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
            <CollapsableComp path={'specialties'}/>
            <Footers />
        </div>
    )
}

export default Especialidades