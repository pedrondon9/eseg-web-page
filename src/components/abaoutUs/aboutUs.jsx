import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <p>
          En la <strong>Escuela Superior de Estudios Globales (E.S.E.G.) </strong> 
          somos una institución educativa comprometida con la formación académica 
          y profesional de calidad, orientada a responder a los retos del mundo actual.
        </p>
      </div>

      <div className="about-content">
        <p>
          Nuestro objetivo es brindar a los estudiantes las herramientas necesarias 
          para desarrollarse en un entorno globalizado, fomentando el pensamiento crítico, 
          la innovación y la responsabilidad social.
        </p>
        <p>
          Creemos que la educación es la base del progreso, por ello ofrecemos programas 
          en diversas áreas del conocimiento: <b>Artes y Humanidades, Ciencias de la Salud, 
          Comunicación, Educación, Empresa, Jurídico y Ciencia y Tecnología</b>. 
          Cada uno de nuestros cursos está diseñado para formar profesionales capaces de 
          generar un impacto positivo en su comunidad y en el mundo.
        </p>
        <p>
          Con un equipo docente altamente capacitado y metodologías modernas de enseñanza, 
          garantizamos un aprendizaje práctico, dinámico y adaptado a las demandas del mercado laboral.
        </p>
        <p>
          En la E.S.E.G., no solo formamos estudiantes, formamos 
          <b> líderes con visión global y compromiso social.</b>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
