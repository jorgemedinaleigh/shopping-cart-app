import React, { use, useContext, useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { ProductsContext } from '../context/ProductsContext'
import { CartContext } from '../context/CartContext'

export const ShopPage = () => {
  
  const { products } = useContext(ProductsContext)
  const {shoppingList, addPurchase, increaseQty, decreaseQty, deletePurchase} = useContext(CartContext)

  const handleAddToCart = (product) => {
    addPurchase(product)
  }
  const handleRemoveFromCart = (id) => {
    deletePurchase(id) 
  }
  const handleIncreaseQty = (id) => {
    
  }
  const handleDecreaseQty = (id) => {
    
  }
  
  return (
    <>
      <h1>Products</h1>
      <hr />
      {
        products.map(product => (
          <Card key={product.id} 
            image={product.image} 
            title={product.title} 
            description={product.description} 
            price={product.price}
            handleAddToCart={() => handleAddToCart(product)}
            handleRemoveFromCart={() => handleRemoveFromCart(product.id)}
            >
          </Card>
        ))
      }
    </>
  )
}
