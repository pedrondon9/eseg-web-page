import React, { useContext, useEffect, useState } from 'react'
//import '../../styles/BarradeNavegacion.css'
import { Link, useLocation } from "react-router-dom"
import Side from "./sideNav"
import { BsListUl } from "react-icons/bs";

import "./barradeNavegacion.css"
import { FiHome, FiUser, FiSliders } from "react-icons/fi";
import M from "materialize-css"
import Sinav from './sideNav';


const BarradeNavegacion = ({ history }) => {
    const [abrir, setAbrir] = useState(false)

    //funcion para llamar a los submenus

    const location = useLocation();

    const CallSubMenu = (sub) => {



        for (let i = 1; i < 12; i++) {
            if (i === sub) {
                if (document.querySelector(`.subMenu${i}`)) {
                    document.querySelector(`.subMenu${i}`).style.display = "block"
                } else {

                }
            } else {
                if (document.querySelector(`.subMenu${i}`)) {
                    document.querySelector(`.subMenu${i}`).style.display = "none"
                } else {

                }
            }

        }
    }

    const current = location.pathname;

    return (



        <div className="contenedor-sticky   barra-de-nav-scrollTop">
            {/* menu vertical que aparece en dispositivos moviles */}

            {/* fin del menu vertical  */}

            {/* navegacion horizontal */}
            <div className="menu-sticky " id="menu">
                <div className='logo-png'>
                    <Link to="/"><img src={"https://res.cloudinary.com/mumbex/image/upload/v1670484271/axx_vlc1ai.jpg"} alt="" /></Link>
                </div>
                <div className="contenedor-enlaces-nav-sticky">
                    <div className="link-nav-sticky">
                        <Link
                            to={"/"}
                            className=''
                            style={current === "/" ? { color: "#000", backgroundColor: "#F1B900", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#004488" }}
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)
                                }}
                        >Inicio
                        </Link>
                    </div>
                    <div className="link-nav-sticky">
                        <Link
                            to="#!"
                            className=''                            
                            
                            style={["/qsomos","/eqadmision","/reglamento","/ventagas"].includes(current) ? { color: "#000", backgroundColor: "#F1B900", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#004488" }}


                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}
                        >Admisiones
                        </Link>
                        <div className="dropdown-content-sticky"
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}>
                            <div className="collection collection-1 col col4 bordes-bottom">
                                <Link
                                    to="/qsomos"
                                    className="collection-item"
                                    style={current === "/qsomos" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}

                                >
                                    Quienes somos ?
                                </Link>
                                <Link
                                    to="/eqadmision"
                                    style={current === "/eqadmision" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}

                                    className="collection-item"
                                >
                                    Requisitos para la admision
                                </Link>
                                <Link
                                    to="/reglamento"
                                    style={current === "/reglamento" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}

                                    className="collection-item"
                                >
                                    Reglamento interno
                                </Link>
                                <Link
                                    to="/ventagas"
                                    style={current === "/ventagas" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}
                                    className="collection-item"
                                >
                                    Ventagas
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className="link-nav-sticky">
                        <Link to={"/especialidades"}
                            style={current === "/especialidades" ? { color: "#000", backgroundColor: "#F1B900", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#004488" }}

                            className=''
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}
                        >Especialidades
                        </Link >
                       
                    </div>
                    <div className="link-nav-sticky">
                        <Link
                            to="/cursos"
                            style={current === "/cursos" ?{ color: "#000", backgroundColor: "#F1B900", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#004488" }}
                            className=''
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}
                        >Cursos
                        </Link>
                        
                    </div>
                    <div className="link-nav-sticky">
                        <Link
                            to="#!"
                            className=''
                            style={["/administracion","/profesores"].includes(current) ? { color: "#000", backgroundColor: "#F1B900", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#004488" }}

                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}
                        >Administracion
                        </Link>

                        <div className="dropdown-content-sticky"
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}>
                            <div className="collection collection-1 col col4 bordes-bottom">
                                <Link
                                    to="/administracion"
                                    style={current === "/administracion" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}

                                    className="collection-item"
                                >
                                    Personal administrativo
                                </Link>
                                <Link
                                    to="/profesores"
                                    style={current === "/profesores" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}

                                    className="collection-item"
                                >
                                    Profesores
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="link-nav-sticky">
                        <a
                            className=''
                            style={["/allEvent","/allvideos"].includes(current) ? { color: "#000", backgroundColor: "#F1B900", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#004488" }}

                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}
                        >Eventos
                        </a>
                        <div className="dropdown-content-sticky"
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}>
                            <div className="collection collection-1 col col4 bordes-bottom">
                                <Link
                                    to="/allEvent"
                                    style={current === "/allEvent" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}

                                    className="collection-item"
                                >
                                    Todos los eventos
                                </Link>
                                <Link
                                    to="/allvideos"
                                    style={current === "/allvideos" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#004488" }}

                                    className="collection-item"
                                >
                                    Videos de eventos
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="link-nav-sticky">
                        <Link
                            to={"/contacts"}
                            style={current === "/contacts" ? { color: "#000", backgroundColor: "#F1B900", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#004488" }}

                            className=''
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)
                                }}
                        >Contactos
                        </Link>
                    </div>
                    {/* fin de los submemus */}
                </div>
                <div className="container-icon-bar">
                    <a href="#" data-target="slide-out-nav" className="icon-bar sidenav-trigger">
                        <BsListUl size={30} />
                    </a>
                </div>
            </div>

        </div>

    )
}

export default BarradeNavegacion;




