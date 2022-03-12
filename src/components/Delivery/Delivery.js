import React from 'react'
import CartSummary from './CartSummary'
import Event from './Event'
import Payment from './Payment'

const Delivery = () => {
    
  return (
    <div className="container p-2">
        <h3 className='text-primary'>Order Details</h3>
      <div className="row">
        <div className="col-7 m-1 overflow-auto" style={{height:"500px"}} >
            <Event />
            <CartSummary/>
        </div>
        <div className="col-4 m-1">
          <Payment/>
        </div>
      </div>
    </div>
  )
}

export default Delivery