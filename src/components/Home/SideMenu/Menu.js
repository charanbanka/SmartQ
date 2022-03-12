import React from 'react'

const Menu = ({item}) => {
  return (
    <>
        <img className='rounded-circle text-muted' src={item.image} alt={item.name} width="50px" height="50px"></img>
        <p className='text-primary text-muted'>{item.name}</p>
    </>
  )
}

export default Menu