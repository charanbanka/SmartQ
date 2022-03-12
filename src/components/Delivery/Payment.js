import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Style.css'

const Payment = () => {
    const {totalCost} = useSelector((state)=>state.cart)
    const [overlay,setOverlay] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleOrder = ()=>{
        dispatch({type:"DELETECART"})
        dispatch({type:"NOSETCREDIT"})
        navigate('/')
        setOverlay(false) 
    }
  return (
      <div>
          <h4 className='text-primary'>Select Payment Method</h4>
          <div className='overflow-auto shadow' style={{height:"400px"}}>
                <div className='m-4'>
                    <div className="shadow-sm m-2 p-1" >
                        <input onClick={()=>dispatch({type:"NOSETCREDIT"})} style={{marginLeft:"10px",marginRight:"10px" ,cursor:"pointer"}} type="radio" name='option1' id="option1" value="option1"/>
                        <label className='font-weight-bold' htmlFor="exampleRadios1">
                            Net Banking
                        </label>
                    </div>
                        <div className='shadow-sm m-2 p-1'>
                        <input onChange={()=>dispatch({type:"SETCREDIT"})} style={{marginLeft:"10px",marginRight:"10px",cursor:"pointer"}} type="radio" name='option1'  id="option1" value={totalCost}/>
                        <label className='font-weight-bold' htmlFor="exampleRadios1">
                            Credit Card/Debit Card
                        </label>
                        </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center footer-copyright' style={{left:"2rem",bottom:"6rem",position:"absolute"}} >
                        <h5 className='text-dark text-align-center'>Total Amount: $ {totalCost}</h5>
                        <button onClick={()=>setOverlay(true)} className='btn btn-primary m-2' style={{width:"300px"}}>Make Payment</button>
                </div>
            </div>
            {overlay && (
            <div className='d-flex flex-column align-items-center justify-content-center overlay-1'>
             <div style={{width:"400px"}} className="bg-white rounded p-3 d-flex flex-column justify-content-center align-items-center">
                  <p>Great! Your order has been placed successfully.</p>
                  <button onClick={handleOrder} className='btn btn-primary w-75 m-3' >Ok</button>              </div>
            </div>
        )} 
      </div>

  )
}

export default Payment