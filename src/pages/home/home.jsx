import { useEffect, useRef, useMemo, useState, useContext, useCallback } from 'react';
import "./home.css"
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai"
import AppContext from '../../contexts/ServiceContext';
import BarradeNavegacion from '../../components/navegacionBarAll/barradeNavegacion';
import Sinav from '../../components/navegacionBarAll/sideNav';
import { ScaleLoader, MoonLoader, PulseLoader } from "react-spinners";
import axios from 'axios';
import CarrouselBanner from '../../components/banner/carrouselBanner';
import CarrouselH from '../../components/carrouselHome/carrouselH';
import TextoTitulo from '../../components/textoTitle/textoTitulo';
import Seccion1 from '../../components/seccion1/seccion1';
import Seccion2 from '../../components/seccion2/seccion2';
import Footers from '../../components/footers/footers';






function Home() {
  useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <>
      <Sinav />
      <CarrouselBanner />

      <div className='container-home-p'>
        <BarradeNavegacion />
        <CarrouselH />
        <TextoTitulo texto={"Actualidad"} color="#000" />
        <Seccion1 />
        <Seccion2 />
        <Footers />

      </div></>

  )
}
export default Home
