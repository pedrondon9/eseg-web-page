import React, { useEffect } from 'react'
import "./especialidedes.css"
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion'
import TextoTitulo from '../../components/textoTitle/textoTitulo'
import CollecEspecialidades from '../../components/collecEspecialidades/collecEspecialidadesS'
import Footers from '../../components/footers/footers'
import Sinav from '../../components/navegacionBarAll/sideNav'
import M from 'materialize-css'
import axios from 'axios'
import { URL_SERVER } from '../../contexts/constantesVar'
import CollapsableComp from '../../components/collectCursos/collapsableComp'
import SpinnerCargar from '../../components/spinnerCarga/spinnerCargar'

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
    },[])
    return (
        <div>
            <Sinav />
            <BarradeNavegacion />
            {!spinner ?
                <>
                    {data?.map((x, y) =>
                        <div key={y}>
                            <TextoTitulo texto={x.name} color="#000" />
                            <div className='conatainer-collapsable-p'>
                                <div className='conatainer-collapsable-p-resp'>
                                    {x?.specialties ?
                                        <CollapsableComp datos={x.specialties} id={x.name} />
                                        :
                                        <></>}

                                </div>
                            </div>
                        </div>
                    )}
                </>
                :
                <SpinnerCargar />

            }
            <Footers />
        </div>
    )
}

export default Especialidades