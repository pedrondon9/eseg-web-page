import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaMobileAlt, FaCalendarAlt, FaFacebook, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import "./footers.css"
import Suscription from './suscription';
function Footers() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Contacto */}
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Guinea Ecuatorial, Malabo</p>
                    <p>+240 222 404 063</p>
                    <p>+240 222 272 053</p>
                    <p>+240 222 238 450</p>
                    <p>esegadmisiones@gmail.com</p>
                    <p>Siempre disponibles</p>
                </div>

                {/* Enlaces */}
                <div className="footer-section">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#">Admisiones</a></li>
                        <li><a href="#">Especialidades</a></li>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Administración</a></li>
                        <li><a href="#">Eventos</a></li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="footer-section">
                    <h4>Suscríbete</h4>
                    <form className="newsletter">
                        <input type="email" placeholder="Tu correo" />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 ESEG. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footers
