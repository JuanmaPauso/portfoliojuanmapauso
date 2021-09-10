import React, { useEffect, useState } from "react"

const useDatos = () => {
  const [postres, setPostres] = useState([])

  useEffect(() => {
    fetch("json/postres.json")
      .then(response => response.json())
      .then(datos => {
        setPostres(datos)
        console.log(datos)
      })
  }, [])

  return postres
}

const Datos = () => {

  const postres = useDatos()

  return (
    <div  align="center">
      
      <h4>Lista de Postres</h4>
        
      <div >

        <div >

          <table>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Imagen</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead> 
            <tbody>

            {postres.map(item => (

              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
                <td>{item.precio}</td>
                <td><img src={`${process.env.PUBLIC_URL}/images/${item.img}`} alt={item.nombre} width="50px"/></td>
                <td>{item.fecha}</td>
              </tr>

            ))}

            </tbody>

          </table>

        </div>

      </div>
        
    </div>

  )
}

export default Datos;