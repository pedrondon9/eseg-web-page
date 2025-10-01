import React from 'react'
import { Link } from 'react-router-dom'
import "./mapa.css"
import { FaMapMarkerAlt, FaMobileAlt, FaCalendarAlt, FaFacebook, FaTwitter, FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'

function Mapa() {
    return (
        <div className='container-seccion'>
            <div className='container-seccion-resp'>
                <div className='conatainer-contactos'>
                    <div className='conatainer-contactos-link'>
                        <Link to="#"><FaMobileAlt color='#006BF5' size={30} /><span> +240 222 404 063</span></Link>
                        <Link to="#"><FaMobileAlt color='#006BF5' size={30} /><span> +240 222 272 053</span></Link>
                        <Link to="#"><FaWhatsapp color='#006BF5' size={30} /><span> +240 222 272 053</span></Link>
                        <Link to="#"><FaMobileAlt color='#006BF5' size={30} /><span> +240 222 238 450</span></Link>
                        <Link to="#"><HiMail color='#455a64' size={35} /><span> esegadmisiones@gmail.com</span> </Link>
                        <Link to="#"><FaMapMarkerAlt size={35} color="#008CAC" /> <span> Guinea Ecuatoria, Malabo, rotonda balón, al lado de fiagsa </span></Link>
                    </div>
                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=malabo%20escuela%20superior%20de%20estudios%20globales&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mapa
