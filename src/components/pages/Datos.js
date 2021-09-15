import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Widget from "./ux-ui/Widget";


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
        <article className={item.orden} key={item.titulo}>
          <div>

            <Link className="imagenPortada" to={item.url}><img className="coverFoto" src={`${process.env.PUBLIC_URL}/images/${item.img}`}
              alt={item.titulo}
            /></Link>
            
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
