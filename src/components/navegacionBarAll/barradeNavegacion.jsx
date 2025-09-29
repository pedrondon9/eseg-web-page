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



        <div className="contenedor-sticky  container-fluid  barra-de-nav-scrollTop">
            {/* menu vertical que aparece en dispositivos moviles */}

            {/* fin del menu vertical  */}

            {/* navegacion horizontal */}
            <div className="menu-sticky container" id="menu">
                <div className='logo-png'>
                    <Link to="/"><img src={"https://res.cloudinary.com/mumbex/image/upload/v1670484271/axx_vlc1ai.jpg"} alt="" /></Link>
                </div>
                <div className="contenedor-enlaces-nav-sticky">
                    <div className="link-nav-sticky">
                        <Link
                            to={"/"}
                            className=''
                            style={current === "/" ? { color: "#eee", backgroundColor: "#333", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#000" }}
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
                            
                            style={["/qsomos","/eqadmision","/reglamento","/ventagas"].includes(current) ? { color: "#eee", backgroundColor: "#333", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#000" }}


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
                                    style={current === "/qsomos" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}

                                >
                                    Quienes somos ?
                                </Link>
                                <Link
                                    to="/eqadmision"
                                    style={current === "/eqadmision" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}

                                    className="collection-item"
                                >
                                    Requisitos para la admision
                                </Link>
                                <Link
                                    to="/reglamento"
                                    style={current === "/reglamento" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}

                                    className="collection-item"
                                >
                                    Reglamento interno
                                </Link>
                                <Link
                                    to="/ventagas"
                                    style={current === "/ventagas" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}
                                    className="collection-item"
                                >
                                    Ventagas
                                </Link>
                                <Link
                                    to="#"
                                    className="collection-item"
                                >
                                    Turnos
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="link-nav-sticky">
                        <Link to={"/especialidades"}
                            style={current === "/especialidades" ? { color: "#eee", backgroundColor: "#333", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#000" }}

                            className=''
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}
                        >Especialidades
                        </Link >
                        {/* <div className="dropdown-content-sticky"
                                onMouseLeave={
                                    () => {
                                        CallSubMenu(9)

                                    }}>
                                <div className="collection collection-1 col col4 bordes-bottom">
                                    <Link
                                        to="/tecno"
                                        className="collection-item"
                                    >
                                        Tecnología-Redes informaticas
                                    </Link>
                                    <Link
                                        to="/ccecono"
                                        className="collection-item"
                                    >
                                        Ciencias económicas
                                    </Link>
                                    <Link
                                        to="/ccsocial"
                                        className="collection-item"
                                    >
                                        Ciencias sociales
                                    </Link>
                                    <Link
                                        to="/medic"
                                        className="collection-item"
                                    >
                                        Medicina
                                    </Link>
                                </div>
                            </div> */}
                        {/* <div className="dropdown-content-sticky"
                                onMouseLeave={
                                    () => {
                                        CallSubMenu(9)

                                    }}>
                                <div className="collection collection-1 col col4 bordes-bottom">
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Relaciones internacionales y diplomacia
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Redes y telecomunicacion
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Periodismo y cominicacion audiovisual
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Informatica y programacion
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Secretariado ejecutivo y recursos humanos
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Periodismo y cominicacion audiovisual
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Informatica y programacion
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Administracion empresarial y contabilidad informatizada
                                    </Link>
                                </div>
                                <div className="collection collection-1 col col4 bordes-bottom">
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Protocolo diplomatico
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Economia y comercio internacional
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Bancas y finanzas
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Enfermeria y farmacia
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Turismo y cominicacion
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Marketing y publicidad
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Electricidad y electronica industrial
                                    </Link>

                                </div>
                            </div> */}
                    </div>
                    <div className="link-nav-sticky">
                        <Link
                            to="/cursos"
                            style={current === "/cursos" ? { color: "#eee", backgroundColor: "#333", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#000" }}
                            className=''
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}
                        >Cursos
                        </Link>
                        {/* <div className="dropdown-content-sticky"
                            onMouseLeave={
                                () => {
                                    CallSubMenu(9)

                                }}>
                            <div className="collection collection-1 col col4 bordes-bottom">
                                <Link
                                    to="/idiomas"
                                    className="collection-item"
                                >
                                    Idiomas
                                </Link>
                                <Link
                                    to="/patoffice"
                                    className="collection-item"
                                >
                                    Paquete office
                                </Link>
                                <Link
                                    to="/social"
                                    className="collection-item"
                                >
                                    Sociales
                                </Link>
                                <Link
                                    to="/economia"
                                    className="collection-item"
                                >
                                    Economia
                                </Link>
                            </div>
                        </div> */}
                        {/* <div className="dropdown-content-sticky"
                                onMouseLeave={
                                    () => {
                                        CallSubMenu(9)

                                    }}>
                                <div className="collection collection-1 col col4 bordes-bottom">
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Quienes somos ?
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                       Requisitos para la admision
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Reglamento interno
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Ventagas
                                    </Link>
                                    <Link
                                        to="#"
                                        className="collection-item"
                                    >
                                        Turnos
                                    </Link>
                                </div>
                            </div> */}
                    </div>
                    <div className="link-nav-sticky">
                        <Link
                            to="#!"
                            className=''
                            style={["/administracion","/profesores"].includes(current) ? { color: "#eee", backgroundColor: "#333", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#000" }}

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
                                    style={current === "/administracion" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}

                                    className="collection-item"
                                >
                                    Personal administrativo
                                </Link>
                                <Link
                                    to="/profesores"
                                    style={current === "/profesores" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}

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
                            style={["/allEvent","/allvideos"].includes(current) ? { color: "#eee", backgroundColor: "#333", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#000" }}

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
                                    style={current === "/allEvent" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}

                                    className="collection-item"
                                >
                                    Todos los eventos
                                </Link>
                                <Link
                                    to="/allvideos"
                                    style={current === "/allvideos" ? { color: "#F1B900",backgroundColor:"#F1B900"} : { color: "#000" }}

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
                            style={current === "/contacts" ? { color: "#eee", backgroundColor: "#333", borderRadius: "5px", paddingInline: "10px",paddingBlock:"2.5px" } : { color: "#000" }}

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


/*
               
                <div className="collection collection-1-1 col col4 bordes-bottom subMenu1">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/1" className="collection-item bodes-boton-none "> Todo</Link>
                    <Link to="/vercatategoria/11" className="collection-item  bodes-boton-none ">Telefonos</Link>
                    <Link to="/vercatategoria/12" className="collection-item  bodes-boton-none ">Televisiones</Link>
                    <Link to="/vercatategoria/13" className="collection-item bodes-boton-none ">Ordenadores</Link>
                    <Link to="/vercatategoria/14" className="collection-item bodes-boton-none "> Material informatico</Link>
                    <Link to="/vercatategoria/15" className="collection-item bodes-boton-none "> Videojuegos</Link>
                    <Link to="/vercatategoria/17" className="collection-item bodes-boton-none "> Arduino</Link>
                    <Link to="/vercatategoria/18" className="collection-item bodes-boton-none "> Equipos de audiovision</Link>
                  </div>
                </div>
                <div className="collection collection-1-1 col col4 bordes-bottom subMenu10">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/8" className="collection-item bodes-boton-none "> Todo</Link>
                    <Link to="/vercatategoria/81" className="collection-item  bodes-boton-none ">Material de construccion</Link>
                    <Link to="/vercatategoria/82" className="collection-item  bodes-boton-none ">Material para decorrar el hogar</Link>
                  </div>
                </div>
                <div className="collection collection-1-1 col col4 bordes-bottom subMenu2">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/31" className="collection-item  bodes-boton-none ">Todo</Link>
                    <Link to="/vercatategoria/311" className="collection-item  bodes-boton-none ">Alquilar casa de una habitacion</Link>
                    <Link to="/vercatategoria/312" className="collection-item  bodes-boton-none ">Alquilar casa de dos habitaciones</Link>
                    <Link to="/vercatategoria/313" className="collection-item bodes-boton-none ">Alquilar casa de tres habitaciones</Link>
                    <Link to="/vercatategoria/314" className="collection-item bodes-boton-none ">Alquilar casa de cuatro habitaciones</Link>
                    <Link to="/vercatategoria/315" className="collection-item bodes-boton-none ">Alquilar casa de cinco habitaciones</Link>
                    <Link to="/vercatategoria/316" className="collection-item bodes-boton-none ">Alquilar casa de mas de cinco habitaciones</Link>
                  </div>
                </div>
                <div className="collection collection-1-1 col col4 bordes-bottom subMenu3">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/32" className="collection-item  bodes-boton-none ">Todo</Link>
                    <Link to="/vercatategoria/321" className="collection-item  bodes-boton-none ">Vender casa una habitacion</Link>
                    <Link to="/vercatategoria/322" className="collection-item  bodes-boton-none ">Vender casa dos habitaciones</Link>
                    <Link to="/vercatategoria/323" className="collection-item bodes-boton-none ">Vender casa tres habitaciones</Link>
                    <Link to="/vercatategoria/324" className="collection-item bodes-boton-none ">Vender casa cuatro habitaciones</Link>
                    <Link to="/vercatategoria/325" className="collection-item bodes-boton-none ">Vender casa cinco habitaciones</Link>
                    <Link to="/vercatategoria/326" className="collection-item bodes-boton-none ">Vender casa mas de cinco habitaciones</Link>
                  </div>
                </div>
                <div className="collection collection-1-1 col col4 bordes-bottom subMenu7">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/6" className="collection-item bodes-boton-none ">todo</Link>
                    <Link to="/vercatategoria/61" className="collection-item  bodes-boton-none ">Zapatos para hombres</Link>
                    <Link to="/vercatategoria/62" className="collection-item  bodes-boton-none ">Zapatos para mujeres</Link>
                    <Link to="/vercatategoria/63" className="collection-item  bodes-boton-none ">Zapatos para niños</Link>
                    <Link to="/vercatategoria/64" className="collection-item bodes-boton-none ">Ropas para mujeres</Link>
                    <Link to="/vercatategoria/65" className="collection-item bodes-boton-none ">Ropas para hombres</Link>
                    <Link to="/vercatategoria/66" className="collection-item bodes-boton-none ">Ropas para niños</Link>
                    <Link to="/vercatategoria/67" className="collection-item bodes-boton-none ">Venta de pelo para mujeres</Link>
                    <Link to="/vercatategoria/68" className="collection-item bodes-boton-none ">Aguacate</Link>
                    <Link to="/vercatategoria/69" className="collection-item bodes-boton-none ">Pelucas</Link>
                    <Link to="/vercatategoria/601" className="collection-item bodes-boton-none ">Joyas</Link>
                  </div>
                </div>
                <div className="collection collection-1-1 col col4 bordes-bottom subMenu4">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/4" className="collection-item bodes-boton-none "> Todo</Link>
                    <Link to="/vercatategoria/41" className="collection-item  bodes-boton-none ">Clases particulares</Link>
                    <Link to="/vercatategoria/46" className="collection-item bodes-boton-none ">Buscar empleo</Link>
                    <Link to="/vercatategoria/47" className="collection-item bodes-boton-none ">Ofrecer empleo</Link>
                    <Link to="/vercatategoria/48" className="collection-item  bodes-boton-none ">limpiesa en hogar</Link>
                    <Link to="/vercatategoria/404" className="collection-item bodes-boton-none ">venta de agua a domicilio</Link>
                    <Link to="/vercatategoria/405" className="collection-item bodes-boton-none ">lavado de coches a domicilio</Link>
                    <Link to="/vercatategoria/403" className="collection-item bodes-boton-none ">coche grua</Link>
                    <Link to="/vercatategoria/401" className="collection-item bodes-boton-none ">reparacion de aparatos</Link>
                    <Link to="/vercatategoria/49" className="collection-item bodes-boton-none ">mecanicos de coches</Link>

                  </div>
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/406" className="collection-item bodes-boton-none ">instaciones electricas</Link>
                    <Link to="/vercatategoria/44" className="collection-item bodes-boton-none ">publicidad</Link>
                    <Link to="/vercatategoria/43" className="collection-item bodes-boton-none ">informatica</Link>
                    <Link to="/vercatategoria/42" className="collection-item bodes-boton-none ">construccion</Link>
                    <Link to="/vercatategoria/402" className="collection-item bodes-boton-none ">fontaneria</Link>
                    <Link to="/vercatategoria/45" className="collection-item bodes-boton-none ">sanidad</Link>
                  </div>
                </div>
                <div className="collection collection-1-1 col col4 bordes-bottom subMenu5">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/5" className="collection-item bodes-boton-none ">Todo</Link>
                    <Link to="/vercatategoria/51" className="collection-item  bodes-boton-none ">coches en alquiler</Link>
                    <Link to="/vercatategoria/52" className="collection-item  bodes-boton-none ">coches en venta</Link>
                    <Link to="/vercatategoria/53" className="collection-item bodes-boton-none ">taxis en elquiler</Link>
                  </div>
                </div>

                <div className="collection collection-1-1 col col4 bordes-bottom subMenu6">
                  <div className="collection collection-1-2">
                    <Link to="/vercatategoria/2" className="collection-item bodes-boton-none ">Todo</Link>
                    <Link to="/vercatategoria/21" className="collection-item  bodes-boton-none ">conectores rg45</Link>
                    <Link to="/vercatategoria/22" className="collection-item  bodes-boton-none ">cables ethernet</Link>
                    <Link to="/vercatategoria/23" className="collection-item bodes-boton-none ">routers</Link>
                    <Link to="/vercatategoria/24" className="collection-item bodes-boton-none ">antenas</Link>
                    <Link to="/vercatategoria/25" className="collection-item bodes-boton-none ">modems</Link>
                    <Link to="/vercatategoria/26" className="collection-item bodes-boton-none ">Switch</Link>
                  </div>
                </div>


                */

