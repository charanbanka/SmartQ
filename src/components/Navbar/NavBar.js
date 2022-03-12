import React, { useState } from 'react'
import logo from '../images/SmartQ Logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import './Style.css'

const Navbar = () => {
  const [search,setSearch] = useState(null)
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  
  }
  return (
    <div className='container-fluid shadow-sm d-flex justify-content-around align-items-center' style={{height:"70px"}}>
        <div className='logo'>
            <img src={logo} alt="logo" width="150px" height="40px" ></img>
        </div>
        <div className="input-group shadow-sm search">
            <span className='form-text' ><AiOutlineSearch size="32px" style={{paddingLeft:"10px"}}/></span>
            <input type="text" className="form-control border-0" value={search} onChange={handleSearch} placeholder="Search item" />
        </div>
    </div>
  )
}

export default Navbar