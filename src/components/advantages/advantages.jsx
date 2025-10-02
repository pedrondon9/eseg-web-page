import React from "react";
import "./Advantages.css";

const Advantages = () => {
  return (
    <section className="advantages-section">
      <div className="advantages-header">
        <p>
          En la <strong>Escuela Superior de Estudios de Guinea</strong> ofrecemos una experiencia educativa única,
          diseñada para preparar a los estudiantes con conocimientos prácticos, visión global
          y herramientas para destacar en el mundo laboral.
        </p>
      </div>

      <div className="advantages-content">
        <div className="advantage-card">
          <h3>Formación de Calidad</h3>
          <p>
            Programas académicos actualizados y alineados con las demandas del mercado laboral.
          </p>
        </div>

        <div className="advantage-card">
          <h3>Visión Global</h3>
          <p>
            Planes de estudio diseñados para formar profesionales con competencias internacionales.
          </p>
        </div>

        <div className="advantage-card">
          <h3>Enfoque Práctico</h3>
          <p>
            Aprendizaje basado en proyectos reales y prácticas profesionales en empresas.
          </p>
        </div>

        <div className="advantage-card">
          <h3>Docentes Expertos</h3>
          <p>
            Equipo docente altamente capacitado con experiencia académica y profesional.
          </p>
        </div>

        <div className="advantage-card">
          <h3>Orientación y Apoyo</h3>
          <p>
            Acompañamiento personalizado para el desarrollo académico y profesional de cada estudiante.
          </p>
        </div>

        <div className="advantage-card">
          <h3>Oportunidades Laborales</h3>
          <p>
            Conexiones con empresas y programas de empleabilidad para facilitar la inserción laboral.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
