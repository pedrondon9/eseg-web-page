import React from "react";
import "./InternalRules.css";

const InternalRules = () => {
  return (
    <section className="rules-section">
      <div className="rules-header">
        <p>
          El presente reglamento establece las normas de convivencia, derechos y deberes
          de los estudiantes, docentes y personal administrativo de la{" "}
          <strong>Escuela Superior de Estudios Globales (E.S.E.G.)</strong>, con el
          objetivo de garantizar un ambiente académico respetuoso, seguro y propicio para el aprendizaje.
        </p>
      </div>

      <div className="rules-content">
        <h3>1. Disposiciones Generales</h3>
        <ul>
          <li>Define normas de convivencia y organización interna del centro.</li>
          <li>Su objetivo es asegurar el respeto, la seguridad y el aprendizaje.</li>
        </ul>

        <h3>2. Derechos de los Estudiantes</h3>
        <ul>
          <li>Recibir una formación académica de calidad en igualdad de condiciones.</li>
          <li>Acceder a instalaciones y recursos para su desarrollo académico.</li>
          <li>Ser evaluados de manera objetiva y transparente.</li>
          <li>Expresar opiniones con respeto dentro de la comunidad educativa.</li>
          <li>Recibir orientación académica y apoyo en su formación profesional.</li>
        </ul>

        <h3>3. Deberes de los Estudiantes</h3>
        <ul>
          <li>Asistir puntualmente a clases y cumplir con la carga académica.</li>
          <li>Respetar a compañeros, docentes y personal administrativo.</li>
          <li>Cuidar las instalaciones y recursos del centro.</li>
          <li>Mantener un comportamiento adecuado dentro y fuera del aula.</li>
          <li>Evitar cualquier forma de fraude académico.</li>
        </ul>

        <h3>4. Normas de Convivencia</h3>
        <ul>
          <li>Prohibido consumo de alcohol, drogas o sustancias ilícitas.</li>
          <li>No se permite lenguaje ofensivo, discriminatorio o violento.</li>
          <li>Uso de dispositivos electrónicos regulado por el docente.</li>
          <li>Respeto a la diversidad y resolución pacífica de conflictos.</li>
        </ul>

        <h3>5. Régimen Académico</h3>
        <ul>
          <li>Asistencia mínima del <strong>80%</strong> para ser evaluado.</li>
          <li>Entrega de trabajos y proyectos en los plazos establecidos.</li>
          <li>Exámenes según calendario académico oficial.</li>
          <li>Plagio o copia será motivo de sanción académica.</li>
        </ul>

        <h3>6. Sanciones</h3>
        <ul>
          <li>Amonestación verbal.</li>
          <li>Amonestación escrita.</li>
          <li>Suspensión temporal de clases.</li>
          <li>Expulsión definitiva del centro.</li>
        </ul>

        <h3>7. Disposiciones Finales</h3>
        <ul>
          <li>El reglamento será revisado y actualizado periódicamente.</li>
          <li>Todo estudiante al matricularse acepta y se compromete a cumplirlo.</li>
        </ul>
      </div>
    </section>
  );
};

export default InternalRules;
