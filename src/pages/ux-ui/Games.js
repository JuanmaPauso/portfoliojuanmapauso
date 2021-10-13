import React from "react";

const Games = () => {
  return (
    <div className="page fondo-imac">
      <section>
        <div className="trabajo">

          <h1 className="titulo-trabajo">REDISEÑO DE JUEGOS MULTIPLATAFORMA</h1>

          <img
            className="portada-trabajo"
            src={`${process.env.PUBLIC_URL}/images/games.jpg`}
            alt="portada-juegos"
          />

          <p className="parrafo">
            Hooptap era una empresa que se dedicaba a la gamificiación, ofrecía
            más de 50 mecánicas modificables a través de su plataforma.
          </p>
          <p className="parrafo">
            El problema era que los juegos se fueron desarrollando sobre la
            marcha por diversos diseñadores, cada uno con un diseño único,
            complicando exponencialmente el trabajo para su personalización, al
            tener que adaptar las imágenes a diversos formatos y tamaños. Tal
            era la complejidad que pocos clientes modificaban los juegos y en la
            mayoría de los casos nos encargaban a nosotros realizar los cambios.
          </p>

          <img
            className="imagen-trabajo"
            src={`${process.env.PUBLIC_URL}/images/games-old-images.jpg`}
            alt="portada-juegos"
          />

          <p className="parrafo">
            La solución fue un rediseño de todos los juegos de la plataforma de
            gamificación, mejorando la estructura y aunando los formatos de las
            imágenes para facilitar su modificación.
          </p>
          <p className="parrafo">
            Se estudio la estructura de todos los juegos buscando los elementos
            en común, que fueron el scoreboard y el fondo, a partir de ahí se
            determino un mismo tamaño y formato para todos los elementos
            visuales.
          </p>
          <p className="parrafo">
            El diseño del Scoreboard tenia que ser una estructura que albergara
            todo tipo de información desde el tiempo, la puntuación, etc. Se
            estructuro de forma modular, cambiando la información según la
            mecánica lo requería.
          </p>
          <p className="parrafo">
            El resultado final fue un ahorro de tiempo y recursos, facilitando
            el uso para usuarios que no fueran diseñadores.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Games;
