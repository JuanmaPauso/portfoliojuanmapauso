import React from "react";
import { useMediaQuery } from "react-responsive";

const Curriculum = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 721px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <div className="page">
      {isDesktopOrLaptop && (
        <section>
          <div className="presentacion">
            <div className="foto"></div>
            <div>
              <p>
                Hola, me llamo Juanma Pérez y soy diseñador gráfico. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nobis obcaecati
                illum exercitationem delectus repellat ab excepturi architecto
                quaerat ut ad, adipisci harum inventore vel dolore, perspiciatis
                necessitatibus. Facilis, soluta. Error?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                obcaecati illum exercitationem delectus repellat ab excepturi
                architecto quaerat ut ad, adipisci harum inventore vel dolore,
                perspiciatis necessitatibus. Facilis, soluta. Error?
              </p>
            </div>
          </div>
        </section>
      )}
      {isTabletOrMobile && (
        <section>
          <div className="presentacion">
            <div className="foto"></div>
            <div>
              <p>
                Hola, me llamo Juanma Pérez y soy diseñador gráfico. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nobis obcaecati
                illum exercitationem delectus repellat ab excepturi architecto
                quaerat ut ad, adipisci harum inventore vel dolore, perspiciatis
                necessitatibus. Facilis, soluta. Error?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                obcaecati illum exercitationem delectus repellat ab excepturi
                architecto quaerat ut ad, adipisci harum inventore vel dolore,
                perspiciatis necessitatibus. Facilis, soluta. Error?
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Curriculum;
