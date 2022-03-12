import React from 'react'
import {MdAddShoppingCart} from 'react-icons/md'

const Cart = () => {
  return (
    <div className='shadow rounded-lg' style={{height:"450px"}}>
        <div className='bg-primary rounded-top' style={{height:"40px"}}>
            <p className='text-white p-2'>Cart Summary</p>
        </div>
        <div className='font-weight-lighter h-100 d-flex flex-column justify-content-center align-items-center'>
            <span><MdAddShoppingCart size="36px" /></span>
            <p className='text-dark text-muted'>Your cart is empty</p>
        </div>
    </div>
  )
}

export default Cart