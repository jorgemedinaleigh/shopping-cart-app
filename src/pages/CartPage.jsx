import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {

  const {shoppingList, addPurchase, increaseQty, decreaseQty, deletePurchase} = useContext(CartContext)

  const calculateTotal = () => {
    return shoppingList.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2)
  }

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingList.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-outline-info" onClick={() => decreaseQty(item.id)}>-</button>
                  <button className="btn btn-secondary">{item.qty}</button>
                  <button className="btn btn-outline-info" onClick={()=> increaseQty(item.id)}>+</button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>deletePurchase(item.id)}>Remove</button>
                </td>
              </tr>
            ))
          }
          <th><b>TOTAL:</b></th>
          <th>${calculateTotal()}</th>
          <th></th>
          <th></th>
        </tbody>
      </table>
      <div className="text-end">
        <button className="btn btn-primary">Continue to Payment</button>
      </div>
    </>
  )
}
