import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    
  }
  if (action.type === REMOVE_CART_ITEM) {
   
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    
  }
  if (action.type === CLEAR_CART) {
    
  }
  if (action.type === COUNT_CART_TOTALS) {
    
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
