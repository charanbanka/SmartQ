import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from './components/Actions';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/NavBar';

const App = () => {
    //const [Data,setData] = useState(null)
    const disptach = useDispatch()

    useEffect(()=>{
        disptach(getData())
    },[])
    const {cartDetails} = useSelector((state)=>state.cart)
    console.log(cartDetails)
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} exact />
        </Routes>
    </BrowserRouter>
  )
}

export default App