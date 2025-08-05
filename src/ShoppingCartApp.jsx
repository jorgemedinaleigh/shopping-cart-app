import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ShopPage } from './pages/ShopPage'
import { CartPage } from './pages/CartPage'
import { ProductsProvider } from './context/ProductsProvider'
import { CartProvider } from './context/CartProvider'

export const ShoppingCartApp = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/" element={<ShopPage></ShopPage>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="/*" element={<Navigate to="/"/>}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  )
}
