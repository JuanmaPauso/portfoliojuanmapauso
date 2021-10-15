import React from "react";

const Games = () => {
  return (
    <div className="page">
      <section>
        <div className="trabajo">
          <img
            className="portada-trabajo"
            src={`${process.env.PUBLIC_URL}/images/games-cover.jpg`}
            alt="portada-juegos"
          />

          <h1 className="titulo-trabajo">REDISEÑO DE JUEGOS MULTIPLATAFORMA</h1>

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
            src={`${process.env.PUBLIC_URL}/images/games-old-images.png`}
            alt="portada-juegos"
          />
          <div className="pie-foto">Diseños de juegos antiguos</div>

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

          <img
            className="imagen-trabajo"
            src={`${process.env.PUBLIC_URL}/images/games-new-images.png`}
            alt="portada-juegos"
          />
          <div className="pie-foto">Rediseño de los juegos</div>

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
