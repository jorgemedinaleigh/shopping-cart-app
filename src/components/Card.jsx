import React from 'react'
import { useState } from 'react'
import '../styles/card.css'

export const Card = ({image, title, description, price}) => {

  const [added, SetAdded] = useState(false)

  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen"/>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>
      </div>
      {
        added ? <button type="button" className="boton-quitar">Remove from Cart</button>
              : <button type="button" className="boton-agregar">Add to Cart</button>
      }
    </div>
  )
}
