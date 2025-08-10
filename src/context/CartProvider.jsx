import { useReducer } from 'react'
import { CartContext } from './CartContext'

const initialState = []

const shoppingReducer = (state = initialState, action = {}) => {
  switch(action.type){
    case '[CART] Add Purchase':
      return [...state, action.payload]
    case '[CART] Increase Quantity':
      return state.map(item => {
        const quantity = item.qty + 1
        if(item.id === action.payload){
          return {...item, qty: quantity}
        }
        else {
          return item
        }
      })
    case '[CART] Decrease Quantity':
      return state.map(item => {
        const quantity = item.qty - 1
        if(item.id === action.payload && quantity > 0){
          return {...item, qty: quantity}
        }
        else{
          return item
        }
      })
      break;
    case '[CART] Delete Purchase':
      return state.filter(purchase => purchase.id !== action.payload)
    default:
      return state
  }
}

export const CartProvider = ({children}) => {

  const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

  const addPurchase = (purchase) => {
    purchase.qty = 1
    const action = {
      type: '[CART] Add Purchase',
      payload: purchase
    }
    dispatch(action)
  }
  const increaseQty = (id) => {
    const action = {
      type: '[CART] Increase Quantity',
      payload: id
    }
    dispatch(action)
  }
  const decreaseQty = (id) => {
    const action = {
      type: '[CART] Decrease Quantity',
      payload: id
    }
    dispatch(action)
  }
  const deletePurchase = (id) => {
    const action = {
      type: '[CART] Delete Purchase',
      payload: id
    }
    dispatch(action)
  }

  return (
    <CartContext.Provider value={{shoppingList, addPurchase, increaseQty, decreaseQty, deletePurchase}}>
      {children}
    </CartContext.Provider>
  )
}
