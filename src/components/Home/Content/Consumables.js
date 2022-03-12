import React, { useEffect, useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'

const Consumables = ({item}) => {
    const [subMenu,setSubMenu] = useState(false)
    const [qty,setQty] = useState(0)
    const [subTotal,setSubTotal] = useState(0)
    const handleQty = (e)=>{
        setQty(e.target.value)
        let m = Number((qty*item.price*100).toPrecision(15))
        setSubTotal(Math.round(m) / 100 * Math.sign(qty*item.price))
    }
    console.log(item)
    useEffect(()=>{

    },[qty])
  return (
    <div className='container shadow p-2' style={{marginTop:"2rem"}}>
        <div className='rounded row shadow-sm'>
            <div className='col-3'>
                 <img src={item.imageurl} alt={item.foodid} className="rounded" height="100px" width="100%"></img>
            </div>
                
                <div className='col-6'>
                    <h4 className='text-dark'>{item.foodname}</h4>
                    <p>{item?.fooddescription}</p>
                    <button className='btn btn-primary rounded' onClick={()=>setSubMenu(true)} >Add on</button>
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
                <div className=''>
                    <div className='row d-flex justify-content-between'>
                        <p>Choose Toppings</p>
                        <AiOutlineDown />
                    </div>
                    {/* {item?.subMenu?.map((value)=>(
                        <div key={value} className='container m-2'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                <label class="form-check-label" for="exampleRadios1">
                                    value
                                </label>
                            </div>
                        </div>
                    ))} */}
                    
                </div>

            </div>
        )}
        <div className='row' style={{marginTop:"1rem"}}>
            <div className='col-3'>
                <h5 className='text-dark'>Quantity</h5>
                <input type="number" className='form-control' value={qty} onChange={handleQty} placeholder='Qty'/>
            </div>
            <div className='col-6'>
                <h5 className='text-dark'>Session</h5>
                <select name="cars" id="cars" className='form-control'>
                    {item.sessionlist.map((val)=>(
                        <option value={val}>{val}</option>
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
                <p>val</p>
                <button className='btn btn-primary rounded'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Consumables