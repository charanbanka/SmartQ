import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CartSummary = () => {
    const navigate = useNavigate()
    const {cart} = useSelector((state)=>state.cart)
  return (
    <div style={{marginTop:"2rem",marginBottom:"1rem"}} >
        <h4 className='text-primary'>Cart Summary</h4>
        <div className='shadow'>
            <div className='d-flex justify-content-end p-2'>
                <p className='text-primary' role="button" onClick={()=>navigate('/')}>Edit</p>
            </div>
            {cart.length>0 && (
                <div>
                    <div className='row' style={{marginRight:"0.7rem",marginLeft:"0.5rem"}}>
                        <p className='text-muted col-7'>Item</p>
                        <div className='d-flex col-5 justify-content-between'>
                            <p className='text-muted' style={{paddingRight:"2rem"}}>Qty</p>
                            <p className='text-muted'>Sub Total</p>
                            
                        </div>
                    </div>
                    
                    {cart.map((item)=>(
                    <div key={item.foodid} className=' row' style={{marginRight:"0.7rem",marginLeft:"0.5rem"}}>
                        <h6 className='text-dark col-7'>{item.foodname}</h6>
                        <div className='d-flex col-5 justify-content-between'>
                            <h6 className='text-muted' style={{paddingRight:"2rem"}}>{item.qty}</h6>
                            <h6 className='text-muted' >${item.subTotal}</h6>                            
                        </div>
                        <hr style={{border:"1px dashed black", width:"100%"}} />
                    </div>
                
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default CartSummary