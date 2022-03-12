import React, { useState } from 'react'
import {MdAddShoppingCart} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {MdDelete} from 'react-icons/md'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import './Style.css'

const Cart = () => {
  const {cart,totalCost} = useSelector((state)=>state.cart)
  const [overlay,setOverlay] = useState(false)
  const [cartClear,setCartClear] = useState(false)
  const [cartItem,setCartItem] = useState(null)
  const disptach = useDispatch()
  const navigate = useNavigate()
 
  const DispatchActions = ()=>{
    if(cartClear){
      disptach({type:"DELETECART"})
    }
    else{
      if(cartItem){console.log(cartItem);
      disptach({type:"DELETECARTITEM",cartItem})
      }
    }
    setOverlay(false);
    setCartClear(false)
  }
 console.log("total cost")
 console.log(totalCost)
  return (
    <div className='shadow rounded-lg' style={{height:"470px"}}>
        <div className='bg-primary d-flex justify-content-between align-items-center p-3 rounded-top' style={{height:"40px",top:"1rem"}}>
            <p className='text-white' style={{paddingTop:"10px"}}>Cart Summary</p>
            {cart.length>0 && <p onClick={()=>{setCartClear(true); setOverlay(true)}} style={{paddingTop:"10px",cursor:"pointer"}}><RiDeleteBin5Line size="1.5rem"/></p>}
        </div>
        {cart.length>0 ? (
          <div className='overflow-auto' style={{height:"330px"}}>
            <div className='d-flex justify-content-between' style={{marginTop:"1rem",marginRight:"1rem",marginLeft:"1rem"}}>
              <p className='text-muted'>Item</p>
              <div className='d-flex justify-content-between'>
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
                    <h6 className='text-muted border-0 ' onClick={()=>{setOverlay(true); setCartItem(item)}} style={{textAlign:"center",cursor:"pointer"}}><MdDelete/></h6>
                    
                </div>
                <hr style={{border:"1px dashed black", width:"100%"}} />
            </div>
            
            ))}
            
            {cart.length>0 && (
              <div className='d-flex flex-column justify-content-center align-items-center footer-copyright' style={{left:"2rem",bottom:"3rem",position:"absolute"}} >
                <h5 className='text-dark text-align-center'>Total Amount: ${totalCost}</h5>
                <button onClick={()=>navigate('/delivery')} className='btn btn-primary m-2' style={{width:"300px"}}>Proceed</button>
              </div>
            )}
          </div>
          
        ) :(
        <div className='font-weight-lighter h-100 d-flex flex-column justify-content-center align-items-center'>
            <span><MdAddShoppingCart size="36px" /></span>
            <p className='text-dark text-muted'>Your cart is empty</p>
        </div> )}

        {overlay && (
            <div className='d-flex flex-column align-items-center justify-content-center overlay-1'>
             <div style={{width:"250px"}} className="bg-white rounded p-3 d-flex flex-column justify-content-center align-items-center">
                  <p>{`Are you sure you want to clear the cart ${cartClear ? '' : 'item'}?`}</p>
                  <button onClick={DispatchActions} className='btn btn-primary w-75' >Confirm</button>
                  <p onClick={()=>{setOverlay(false);setCartClear(false)}} className='text-primary' style={{paddingTop:"1rem"}}>Cancel</p>
              </div>
            </div>
        )} 
    </div>
  )
}

export default Cart