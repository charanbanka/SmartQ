import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Event = () => {
    const initialvalues = {name:"Charan",eventName:"Lunch Party",eventDate:new Date(),num:12345678,eventLoc:"Hyderabad"}
    const [formData,setFormData] = useState(null)
    const {isCredit} = useSelector((state)=>state.cart)
    useEffect(()=>{
        if(isCredit){
            setFormData(initialvalues)
        }
        else{
            setFormData(null)
        }
    },[isCredit])
    return (
    <div>
        <h4 className='text-primary'>Event Details</h4>
        <div className='shadow p-2'>
            <form className='row'>
                <div className='col'>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={formData?.name} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" className="form-control" id="eventName" value={formData?.eventName}  placeholder="Event Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input type="date" className="form-control" id="eventDate" value={formData?.eventDate} placeholder="Event Date" />
                    </div>
                </div>
                
                <div className='col'>
                    <div className="form-group">
                        <label htmlFor="num">Contact Number</label>
                        <input type="number" className="form-control" id="num" value={formData?.num}  placeholder="Contact Number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventLoc">Event Location</label>
                        <input type="text" className="form-control" id="eventLoc" value={formData?.eventLoc}  placeholder="Event Location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="delivery">Delivery Mode</label>
                        <select id="delivery" className='form-control'>
                                <option>Delivery</option>
                        </select>             
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Event