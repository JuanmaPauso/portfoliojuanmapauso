import React from "react";

const Widget = () => {
  return (
    <div className="page">
    <section>
      <div className="trabajo">
        <img
          className="portada-trabajo"
          src={`${process.env.PUBLIC_URL}/images/widget-cover.jpg`}
          alt="portada-widget"
        />

        <h1 className="titulo-trabajo">WIDGET DE GAMIFICACIÓN</h1>

        <p className="parrafo">
        Hooptap era una empresa que se dedicaba a la Gamificación, anteriormente implementaba está creando entornos web totalmente nuevos, pero los clientes demandaban un producto que se adaptara a su web sin tener que crear nuevas direcciones, entonces nació el concepto de un widget que se adjuntara como una capa por encima del sitio del cliente.
        </p>
        <p className="parrafo">
        El problema del primer prototipo es que era poco práctico para adaptarlo a diversos entornos, aparte de ser muy complejo en funcionalidades. El objetivo era crear un widget personalizable, que se pudiera adaptar al diseño del cliente aparte de simplificar su funcionamiento.

        </p>

        <p className="parrafo">
        Se eliminaron funcionalidades en busca de un producto totalmente enfocado a la Gamificación. Los diversos elementos, como cabeceras, iconos etc , se modificaron para dar mayores posibilidades de configuración a los clientes.

        </p>
        <p className="parrafo">
        El diseño fue realizado en Sketch, los iconos en Illustrator y los mockups de ejemplos de adaptaciones con Photoshop.

        </p>

        <img
          className="imagen-trabajo"
          src={`${process.env.PUBLIC_URL}/images/Web-coffe-2.png`}
          alt="portada-juegos"
        />
        <div className="pie-foto">Mockup de cadena de cafeterias</div>

        <p className="parrafo">
        El resultado fue una herramienta más personalizable, util y fácil de manejar para el futuro cliente.
        </p>

        <img
          className="imagen-trabajo"
          src={`${process.env.PUBLIC_URL}/images/Web-airlines-2.png`}
          alt="portada-juegos"
        />
        <div className="pie-foto">Mockup de Aerolinea</div>
        
      </div>
    </section>
  </div>
  );
};

export default Widget;
