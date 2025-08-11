import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaMobileAlt, FaCalendarAlt, FaFacebook, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import "./footers.css"
import Suscription from './suscription';
function Footers() {
    return (
        <div className='container-footer-p'>
            <Suscription />
            <div className='conatainer-footer-link-content'>
                <div className='conatainer-footer-link-content-resp'>
                    <div className='conatainer-footer-contents'>
                        <Link to="#"><FaMapMarkerAlt size={25} color="#008CAC" /> <span>Guinea Ecuatoria, Malabo</span></Link>
                        <Link to="#"><FaMobileAlt color='#006BF5' size={25} /><span> +240 222 404 063</span></Link>
                        <Link to="#"><FaMobileAlt color='#006BF5' size={25} /><span> +240 222 272 053</span></Link>
                        <Link to="#"><FaMobileAlt color='#006BF5' size={25} /><span> +240 222 238 450</span></Link>
                        <Link to="#"><HiMail color='#455a64'  size={25} /><span>esegadmisiones@gmail.com</span> </Link>
                        <Link to="#"><FaCalendarAlt color='#33691e' size={25} /><span> Siempre disponibles</span></Link>
                    </div>

                    <div className='conatainer-footer-link'>
                        <Link className="redes-items" to="/"><AiFillYoutube color='#FF084F' size={25} /><span>youtube</span></Link>
                        <Link className="redes-items" to="/"><FaFacebook color='#006BF5' size={25} /><span>facebook</span></Link>
                        <Link className="redes-items" to="/"><FaTwitter color='#006BF5' size={25} /><span>twitter</span></Link>
                    </div>
                    <div className='conatainer-footer-menu'>
                        <Link className="redes-items" to="/">Admisiones</Link>
                        <Link className="redes-items" to="/">Especialidades</Link>
                        <Link className="redes-items" to="/">Cursos</Link>
                        <Link className="redes-items" to="/">Administracion</Link>
                        <Link className="redes-items" to="/">Eventos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footers
