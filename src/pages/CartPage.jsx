import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {

  const {shoppingList, addPurchase, increaseQty, decreaseQty, deletePurchase} = useContext(CartContext)

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
                <td>{item.price}</td>
                <td>1</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={()=>deletePurchase(item.id)}>Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="text-end">
        <button className="btn btn-primary">Continue to Payment</button>
      </div>
    </>
  )
}
