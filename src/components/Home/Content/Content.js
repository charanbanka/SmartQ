import React from 'react'
import { useSelector } from 'react-redux'
import favdish from '../../images/fav-dish.webp'
import Categories from './Categories'
import './Style.css'

const Content = () => {
   
    const {cartDetails} = useSelector((state)=>state.cart)
    const data = cartDetails?.extras?.categories
    
    const items = [
        {name:"Consumables",bannerImage:data?.Consumables?.bannerImage,icon:data?.Consumables?.icon},
        {name:"Decorations",bannerImage:data?.Decorations?.bannerImage,icon:data?.Decorations?.icon},
        {name:"Pizza",bannerImage:data?.Pizza?.bannerImage,icon:data?.Pizza?.icon}
    ]

  return (
    <div className='shadow-sm rounded overflow-auto' style={{height:"500px"}}>
        <div className='row rounded  shadow bg d-flex flex-row' style={{height:"80px"}}>
            <div className='col-8'>
                <h2 className='text-white'>Main Course</h2>
                <p className='text-white'>When you have every favourite dishes in a place</p>
            </div>
            <div className='col-4'>
            <img src={favdish} alt="fav-dish" height="80px" width="100%" ></img>
            </div>
        </div>
        <div className='rounded' style={{marginTop:"1rem"}}>
            {
                items?.map((item)=>(
                    <div key={item?.name} className='rounded shadow p-3' style={{marginTop:"1rem",cursor:"pointer"}} >
                        <Categories item={item}/>

                    </div>

                ))
            }
        </div>
       
    </div>
  )
}

export default Content