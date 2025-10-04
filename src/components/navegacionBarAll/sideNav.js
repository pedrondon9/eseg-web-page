import React, { useContext, useEffect, useRef } from 'react'
import AppContext from '../../contexts/ServiceContext'
import { Link, useLocation } from 'react-router-dom'
import M from 'materialize-css'
import "./sinav.css"

const styleLinkNav = { color: "#F1B900"}
const Sinav = () => {
    const navRef = useRef(null);


    const location = useLocation();
    const current = location.pathname;

    const { } = useContext(AppContext)

    const BuscarConLink = (linkId) => {

    }
    const Destruir = () => {
        const elem = document.querySelector(".sideNavAll")
        var instance = M.Sidenav.getInstance(elem);
        instance.close()
    }




    useEffect(() => {
        if (navRef.current) {
            // Collapsible
            M.Collapsible.init(navRef.current, { accordion: false });
            // Sidenav
            M.Sidenav.init(navRef.current, {
                preventScrolling: false,
                inDuration: 150,
            });
        }
    }, []);



    return (
        <ul ref={navRef} id="slide-out-nav" className="collapsible side-collap  sidenav sideNavAll">
            <li>
                <div className="collapsible-header avatar-collecion" >
                    <Link onClick={() => { Destruir() }} to={"/"} className="" >
                        <span style={current === "/" ? styleLinkNav : {}}
                        >Inicio</span>
                    </Link>
                </div>
                <div className="collapsible-body">
                    <div className="collection">

                    </div>
                </div>
            </li>
            <li>
                <div className="collapsible-header avatar-collecion" >
                    <span style={["/qsomos","/eqadmision","/reglamento","/ventagas"].includes(current)?styleLinkNav:{}} className=''
                    >Admisiones</span>
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
                <div className="collapsible-header avatar-collecion" >
                    <Link onClick={() => { Destruir() }} to={"/especialidades"} className="" >
                        <span style={current === "/especialidades" ? styleLinkNav : {}}
                        >Especialidades</span>
                    </Link>
                </div>
                <div className="collapsible-body">
                    <div className="collection">

                    </div>
                </div>
            </li>
            <li>
                <div className="collapsible-header avatar-collecion" >
                    <Link onClick={() => { Destruir() }} to={"/cursos"} className="" >
                        <span style={current === "/cursos" ? styleLinkNav : {}}
                        >Cursos</span>
                    </Link>
                </div>
                <div className="collapsible-body">
                    <div className="collection">

                    </div>
                </div>
            </li>
            <li>
                <div className="collapsible-header avatar-collecion" >
                    <span style={["/administracion","/profesores"].includes(current) ? styleLinkNav : {}}>Personal</span>
                </div>
                <div className="collapsible-body">
                    <div className="collection">
                        <Link onClick={() => { Destruir() }} to="/administracion" className="collection-item blue-grey-text text-darken-4 ">Administracion</Link>
                        <Link onClick={() => { Destruir() }} to="/profesores" className="collection-item blue-grey-text text-darken-4 ">Profesores</Link>
                    </div>
                </div>
            </li>
            <li>


                <div className="collapsible-header avatar-collecion" >
                    <span style={["/allEvent","/allvideos"].includes(current)?styleLinkNav:{}}>Eventos</span>
                </div>
                <div className="collapsible-body">
                    <div className="collection">
                        <Link onClick={() => { Destruir() }} to="/allEvent" className="collection-item blue-grey-text text-darken-4 ">Todos los eventos</Link>
                        <Link onClick={() => { Destruir() }} to="/allvideos" className="collection-item blue-grey-text text-darken-4 ">Videos de eventos</Link>
                    </div>
                </div>
            </li>
            <li>

                <div className="collapsible-header avatar-collecion" >
                    <Link onClick={() => { Destruir() }} to={"/contacts"} className="" >
                        <span style={current === "/contacts" ? styleLinkNav : {}}
                        >Contactos</span>
                    </Link>
                </div>
                <div className="collapsible-body">
                    <div className="collection">

                    </div>
                </div>
            </li>
           
        </ul>
    )
}

export default Sinav

