import React from 'react'
import { useState } from 'react'
import '../styles/card.css'

export const Card = ({image, title, description, price}) => {

  const [added, SetAdded] = useState(false)
  const clickAdd = () => {
    SetAdded(true)
  }
  const clickRemove = () => {
    SetAdded(false)
  }

  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen"/>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>
        {
          added ? <button type="button" className="boton-quitar" onClick={clickRemove}>Remove from Cart</button>
                : <button type="button" className="boton-agregar" onClick={clickAdd}>Add to Cart</button>
        }
      </div>
    </div>
  )
}
