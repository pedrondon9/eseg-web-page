import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import 'animate.css';
import "./banner.css"

function CarrouselBanner() {
    const options = {
        dots: false,
        responsiveClass: true,
        autoplay: false,
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
        <section className="container-carrousel-p">
            <div className='container-carrousel-p-resp'>
                <div className='container-carrousel-s'>
                    <div className="container-carrousel-s-resp">
                        <div className="carrousel-banner-item" >
                            {<div className='container-carrousel-img'>
                                <img src={"https://res.cloudinary.com/mumbex/image/upload/v1670484249/logo_zlwjaf.jpg"} />
                            </div>}
                        </div>
                        {/* <OwlCarousel {...options} className=" owl-theme " >

                            <div className="item carrousel-banner-item" >
                                <div className='container-carrousel-img'>
                                    <h1>'useContext' is defined but never used </h1>
                                </div>
                            </div>

                        </OwlCarousel> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarrouselBanner