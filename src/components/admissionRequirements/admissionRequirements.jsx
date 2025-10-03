import React from "react";
import "./AdmissionRequirements.css";

const AdmissionRequirements = () => {
  return (
    <section className="admission-section">
      <div className="admission-header">
        <p>
          Para formar parte de la <strong>Escuela Superior de Estudios Globales (E.S.E.G.)</strong>, 
          es necesario cumplir con los siguientes requisitos según el programa de estudio.
        </p>
      </div>

      <div className="admission-content">
        <ul>
          <li>Formulario de inscripción debidamente cumplimentado.</li>
          <li>Copia del título de bachillerato o equivalente.</li>
          <li>Certificado académico de estudios previos.</li>
          <li>Fotocopia del documento de identidad o pasaporte.</li>
          <li>2 fotografías tamaño carnet.</li>
          <li>Pago de la tasa de inscripción.</li>
        </ul>

        <p>
          En caso de aspirar a programas de posgrado, será necesario presentar además 
          el <b>título universitario correspondiente</b> y una <b>carta de motivación</b>.
        </p>
      </div>
    </section>
  );
};

export default AdmissionRequirements;
