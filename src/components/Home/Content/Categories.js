import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Consumables from './Consumables'

const Categories = ({item}) => {
  const [isPizza,setIsPizza] = useState(false)
  const [isCunsumables,setIsConsumables] = useState(false)
  const [isDecorations,setIsDecorations] = useState(false)

  const handleClick = (e)=>{
    console.log(e)
    if(e?.target?.alt=="Consumables"){
        //console.log("Consumables")
        setIsConsumables(!isCunsumables)
        setIsDecorations(false)
        setIsPizza(false)
    } else if(e?.target?.alt==="Decorations"){
        //console.log("Consumables-1")
        setIsConsumables(false)
        setIsDecorations(!isDecorations)
        setIsPizza(false)
    } else{
      //console.log("Consumables-2")
      setIsConsumables(false)
      setIsDecorations(false)
      setIsPizza(!isPizza)
    }
}

const {cartDetails} = useSelector((state)=>state.cart)
    //console.log(cartDetails?.extras?.categories)
    const data = cartDetails?.menu

  return (
    <div>
        <div onClick={handleClick}>
          <h3 className='text-dark'>{item.name}</h3>
          <div className='row'>
              <img className='rounded' src={item.icon} alt={item.name} width="20%" height="100px"></img>
              <img className='rounded' src={item.bannerImage} alt={item.name} width="80%" height="100px"></img>
          </div>
        </div>
        <div>
            {isCunsumables&&(
              data.map((item)=>(
                
                item.category==="Consumables" ?<Consumables key={item.foodid} item={item}/> : null
              ))
              
            )}
            {isDecorations&&(
               data.map((item)=>(
                item.category==="Decorations" ?<Consumables key={item.foodid} item={item}/> : null
              ))
            )}
            {isPizza&&(
               data.map((item)=>(
                item.category==="Pizza" ?<Consumables key={item.foodid} item={item}/> : null
              ))
            )}
        </div>
        
    </div>
    
        

  )
}

export default Categories