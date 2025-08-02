import React, { use, useContext, useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { ProductsContext } from '../context/ProductsContext'

export const ShopPage = () => {
  
  const { products } = useContext(ProductsContext)
  
  return (
    <>
      <h1>Products</h1>
      <hr />
      {
        products.map(product => (
          <Card key={product.id} image={product.image} title={product.title} description={product.description} price={product.price}></Card>
        ))
      }
    </>
  )
}
