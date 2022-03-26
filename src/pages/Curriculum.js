import React from "react";

const Curriculum = () => {
  return (
    <div className="page">
      <section>
        <div className="presentacion">
          <div className="foto"></div>
          <div className="biografia">
            <h2>Juanma Pérez</h2>
            <h3>Diseñador UX/UI y desarrollador web</h3>
            <p className="parrafo">
              Actualmente vivo en Valencia, apasionado de las nuevas tecnologías
              y enamorado de los Cómic desde la infancia.
            </p>
            <p className="parrafo">
              En mis 8 años de experiencia, he tenido la suerte de trabajar en
              varias empresas con modelos de negocios diversos desde la
              gamificación hasta los entrenamientos online, desarrollando mis
              diversas habilidades gráficas (diseño UX/UI, ilustración, motion
              grapher, 3D…).
            </p>
            <p className="parrafo">
              En los últimos años me he ido especializando en el diseño UX/UI y
              en la programación web (React, Node.js, MongoDB…) para poder
              desarrollar un proyecto web desde cero.
            </p>
            <div className="botton-cv"> Descargate mi CV </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
