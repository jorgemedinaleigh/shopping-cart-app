import React from 'react'

export const CartPage = () => {
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
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Qty</td>
            <td>Remove Button</td>
          </tr>
        </tbody>
      </table>
      <div className="text-end">
        <button className="btn btn-primary">Continue to Payment</button>
      </div>
    </>
  )
}
