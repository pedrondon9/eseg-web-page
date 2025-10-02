import React, { useContext, useEffect } from 'react'
import AppContext from '../../contexts/ServiceContext'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import "./sinav.css"


const Sinav = () => {
    const { } = useContext(AppContext)

    const BuscarConLink = (linkId) => {

    }
    const Destruir = () => {
        const elem = document.querySelector(".sideNavAll")
        var instance = M.Sidenav.getInstance(elem);
        instance.close()
    }

    useEffect(() => {
        const alls = document.querySelector(".sideNavAll")
        M.Sidenav.init(alls, {
            preventScrolling: false,
            inDuration: 150,
        })


        const collap = document.querySelector('.side-collap')

        M.Collapsible.init(collap, {
            preventScrolling: false,
            inDuration: 150,
        })

    }, [])

    return (
        <ul id="slide-out-nav" className="collapsible side-collap  sidenav sideNavAll">
            <li>
                <div className="collapsible-header avatar-collecion" >
                    <span className=''>Admisiones</span>
                </div>
                <div className="collapsible-body">
                    <div className="collection">
                        <Link onClick={() => { Destruir() }} to="/qsomos" className="collection-item blue-grey-text text-darken-4 ">Quienes somos ?</Link>
                        <Link onClick={() => { Destruir() }} to="/eqadmision" className="collection-item blue-grey-text text-darken-4 ">Requisitos para la admision</Link>
                        <Link onClick={() => { Destruir() }} to="/reglamento" className="collection-item blue-grey-text text-darken-4 ">Reglamento interno</Link>
                        <Link onClick={() => { Destruir() }} to="/ventagas" className="collection-item blue-grey-text text-darken-4 ">Ventagas</Link>
                    </div>
                </div>
            </li>
            <li>
                <Link onClick={() => { Destruir() }} to={"/especialidades"} className="collapsible-header avatar-collecion" >
                    <span>Especialidades</span>
                </Link>
            </li>
            <li>
                <Link onClick={() => { Destruir() }} className="collapsible-header avatar-collecion" to={"/cursos"}><span>Cursos</span></Link>
            </li>
            <li>
                <div className="collapsible-header avatar-collecion" >
                    <span>Personal</span> 
                </div>
                <div className="collapsible-body">
                    <div className="collection">
                        <Link onClick={() => { Destruir() }} to="/administracion" className="collection-item blue-grey-text text-darken-4 ">Administracion</Link>
                        <Link onClick={() => { Destruir() }} to="/profesores" className="collection-item blue-grey-text text-darken-4 ">/Profesores</Link>
                    </div>
                </div> 
            </li>
            <li>


                <div className="collapsible-header avatar-collecion" >
                    <span>Eventos</span> 
                </div>
                <div className="collapsible-body">
                    <div className="collection">
                        <Link onClick={() => { Destruir() }} to="/allEvent" className="collection-item blue-grey-text text-darken-4 ">Todos los eventos</Link>
                        <Link onClick={() => { Destruir() }} to="/allvideos" className="collection-item blue-grey-text text-darken-4 ">Videos de eventos</Link>
                    </div>
                </div> 
            </li>
            <li>
                <Link onClick={() => { Destruir() }} className="collapsible-header avatar-collecion" to={"/contacts"}><span>Contactos</span></Link>
            </li>
            <li>
                <Link onClick={() => { Destruir() }} className="collapsible-header avatar-collecion" to={"/allvideos"}><span>Videos de eventos</span></Link>
            </li>
        </ul>
    )
}

export default Sinav

