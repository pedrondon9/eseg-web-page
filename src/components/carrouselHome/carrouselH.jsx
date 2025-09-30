import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import 'animate.css';
import "./carrouselh.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';


function CarrouselH() {
    const options = {
        dots: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 3000,

        nav: true,
        navClass: ["owl-prev", "owl-next"],
        loop: true,

        responsive: {
            0: {
                items: 1,
            },
            250: {
                items: 1,
            },
            350: {
                items: 1,
            },
            430: {
                items: 1,
            },
            750: {
                items: 1,
            },
            800: {
                items: 1,
            },
            860: {
                items: 1,
            },
            950: {
                items: 1,
            },
            1000: {
                items: 1,
            },

        },
    };





    return (
        <section className="container-home-carrousel-p">
            <div className='container-home-carrousel-p-resp'>
                <OwlCarousel {...options} className=" owl-theme "
                    animateOut="fadeOut"
                    animateIn="fadeIn"
                     >
                    <div className="item carrousel-home-item" >
                        <div className='container-home-carrousel-img'>
                            {/* <LazyLoadImage
                                effect="black-and-white"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1670484256/we_enspyg.jpg"}
                            /> */}
                            <img src={"https://res.cloudinary.com/mumbex/image/upload/v1670484256/we_enspyg.jpg"} />
                            <div className="overlay">
                                <h2>Bienvenido</h2>
                                <p>Este es un subtítulo encima de la imagen</p>
                                <button className="btn-slide">Ver más</button>
                            </div>
                        </div>
                    </div>
                    <div className="item carrousel-home-item" >
                        <div className='container-home-carrousel-img'>
                            {/* <LazyLoadImage
                                effect="black-and-white"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1670484260/zz_ctbmp8.jpg"}
                            /> */}
                            <img src={"https://res.cloudinary.com/mumbex/image/upload/v1670484260/zz_ctbmp8.jpg"} />
                            <div className="overlay">
                                <h2>Bienvenido</h2>
                                <p>Este es un subtítulo encima de la imagen</p>
                                <button className="btn-slide">Ver más</button>
                            </div>
                        </div>
                    </div>


                    <div className="item carrousel-home-item" >
                        <div className='container-home-carrousel-img'>
                            {/* <LazyLoadImage
                                effect="black-and-white"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1670484895/ddd_tuzsbn.jpg"}
                            /> */}
                            <img src={"https://res.cloudinary.com/mumbex/image/upload/v1670484895/ddd_tuzsbn.jpg"} />
                            <div className="overlay">
                                <h2>Bienvenido</h2>
                                <p>Este es un subtítulo encima de la imagen</p>
                                <button className="btn-slide">Ver más</button>
                            </div>
                        </div>
                    </div>
                    <div className="item carrousel-home-item" >
                        <div className='container-home-carrousel-img'>
                            {/* <LazyLoadImage
                                effect="black-and-white"
                                src={"https://res.cloudinary.com/mumbex/image/upload/v1670484267/xcx_r8nput.jpg"}
                            /> */}
                            <img src={"https://res.cloudinary.com/mumbex/image/upload/v1670484267/xcx_r8nput.jpg"} />
                            <div className="overlay">
                                <h2>Bienvenido</h2>
                                <p>Este es un subtítulo encima de la imagen</p>
                                <button className="btn-slide">Ver más</button>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </section>
    )
}

export default CarrouselH