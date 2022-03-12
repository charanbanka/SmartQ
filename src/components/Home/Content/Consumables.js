import React, { useEffect, useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

const Consumables = ({item}) => {
    const [subMenu,setSubMenu] = useState(false)
    const [qty,setQty] = useState(0)
    //const [submenuPrice,setSubMenuPrice] = useState(0)
    const [subTotal,setSubTotal] = useState(0)
    const {cartDetails} = useSelector((state)=>state.cart)
    const disptach = useDispatch()
    
    const data = cartDetails?.submenu
    
    const handleQty = (e)=>{
        setQty(e.target.value)
    }

    useEffect(()=>{
        let m = Number((qty*item.price*100).toPrecision(15))
        let itemPrice =Math.round(m) / 100 * Math.sign(qty*item.price)
        setSubTotal(itemPrice)
     },[qty])

    

     const handleCart = ()=>{
         item = {...item,qty:Number(qty),subTotal:Number(subTotal)}
        if(item.qty>0) disptach({type:"CARTADD",item})
     }
    const Submenu =()=>{
        if(subMenu){
            return (
                item?.submenu && (item?.submenu?.map((val)=>(
                    <div key={val} className="d-flex justify-content-between align-items-center p-2 shadow-sm" >
                        <div className='d-flex align-items-center justify-content-between '>
                            <input style={{width:"20px",height:"20px",cursor:"pointer", marginLeft:"0.5rem"}} id="mycheck" type="checkbox"/>
                            <img src={data?.Onion.imageurl} style={{marginLeft:"2.5rem",marginRight:"1.5rem"}} className="rounded-circle" alt="image" width="40px" height="40px"></img> 
                            <label className="form-check-label">
                                {val}
                            </label> 
                        </div>                  
                        <div className='' style={{paddingRight:"1rem"}}>
                            <h4 className='text-primary'>${data?.Onion?.price}</h4>
                        </div>
                    </div>
                )))
            )
        }
    }
  return (
    <div className='container shadow p-2' style={{marginTop:"2rem"}}>
        <div className='rounded row shadow-sm'>
            <div className='col-3'>
                 <img src={item.imageurl} alt={item.foodid} className="rounded" height="100px" width="100%"></img>
            </div>
                
                <div className='col-6'>
                    <h4 className='text-dark'>{item.foodname}</h4>
                    <p>{item?.fooddescription}</p>
                    {
                        item.category ==="Pizza" && 
                        <button className='btn btn-primary rounded' onClick={()=>setSubMenu(true)} >Add on</button>
                    } 
                </div>
                <div className='col-3'>
                    <h5 className='text-primary'>${item.price}</h5>
                </div>
        
        </div>
        {subMenu &&(
            <div className='container p-3'>
                <div className='row d-flex justify-content-between'>
                    <p className='text-dark'>{item?.foodname} add-ons</p>
                    <p onClick={()=>setSubMenu(false)} className='text-primary'>Cancel</p>
                </div>
                <div className='col'>
                    <div className='row d-flex justify-content-between'>
                        <p>Choose Toppings</p>
                        <AiOutlineDown />
                    </div>
                    
                    <div className='d-flex flex-column'>
                         <Submenu/>
                    </div>
                
                </div>

            </div>
        )}
        <div className='row' style={{marginTop:"1rem"}}>
            <div className='col-3'>
                <h5 className='text-dark'>Quantity</h5>
                <input type="number" min="0" className='form-control' value={qty} onChange={handleQty} placeholder='Qty'/>
            </div>
            <div className='col-6'>
                <h5 className='text-dark'>Session</h5>
                <select name="cars" id="cars" className='form-control'>
                    {item.sessionlist.map((val)=>(
                        <option key={val} value={val}>{val}</option>
                    ))}
                    
                    
                </select>
            </div>
            <div className='col-3'>
                <h5 className='text-dark'>Sub Total</h5>
                <p>${subTotal}</p>
            </div>
        </div>
        <div className='col' style={{marginTop:"1rem"}}>
            <h5 className='text-dark'>Note to the Kitchen</h5>
           
            <div className='d-flex flex-row justify-content-between'>
                <p>Mate it spicy</p>
                <button onClick={handleCart} className='btn btn-primary rounded'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Consumables