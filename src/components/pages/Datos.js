import React, { useEffect, useState } from "react";

const useDatos = () => {
  const [covers, setCovers] = useState([]);

  useEffect(() => {
    fetch("json/covers.json")
      .then((response) => response.json())
      .then((datos) => {
        setCovers(datos);
        console.log(datos);
      });
  }, []);

  return covers;
};

const Datos = () => {
  const covers = useDatos();

  return (
    <section>
      {covers.map((item) => (
        <article className="portadas" key={item.id}>
          <div>
            <img className="coverFoto"
              src={`${process.env.PUBLIC_URL}/images/${item.img}`}
              alt={item.titulo}
            />
          </div>
          <div>
            <h1 className="tituloCover">{item.titulo}</h1>
            <p>{item.descripcion}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Datos;
