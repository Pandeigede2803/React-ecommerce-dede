import React from 'react'
const CartColumns = () => {
  return (
    <div className="flex justify-center ">
    <div className="grid grid-cols-8  border-b-2 pb-2 border-gray-300 w-4/5">
      {/* Item Column */}
      <div className="col-span-3 ">
        <p className="font-semibold text-center">Item</p>
      </div>
  
      {/* Price Column */}
      <div className=' col-span-1'>
        <p className="font-semibold text-center">Price</p>
      </div>
  
      {/* Quantity Column */}
      <div className=' col-span-2'>
        <p className="font-semibold text-center">Quantity</p>
      </div>
  
      {/* Subtotal Column */}
      <div className=' col-span-2'>
        <p className="font-semibold text-center">Subtotal</p>
      </div>
    </div>
  </div>
  
  )
}


export default CartColumns
