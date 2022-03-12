import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getData } from './components/Actions';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/NavBar';
import Delivery from './components/Delivery/Delivery';

const App = () => {
    //const [Data,setData] = useState(null)
    const disptach = useDispatch()

    useEffect(()=>{
        disptach(getData())
    },[disptach])
    const {cartDetails} = useSelector((state)=>state.cart)
    console.log(cartDetails)
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/delivery" element={<Delivery/>} exact />
        </Routes>
    </BrowserRouter>
  )
}

export default App