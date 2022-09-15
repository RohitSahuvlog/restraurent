import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Components/Login';
import ReqAuth from '../Components/ReqAuth';
import Signin from '../Components/Signin';
import Menu from '../Components/Menu';
import Items from '../Components/Items';
import Checkout from '../Components/Checkout';
import Ordersummery from '../Components/Ordersummery';

const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/signin" element={<Signin/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/" element={<ReqAuth><Menu/></ReqAuth>}/>
    <Route  path="/items" element={<ReqAuth><Items/></ReqAuth>}/>
    <Route  path="/ordercost" element={<ReqAuth><Ordersummery/></ReqAuth>}/>
    <Route  path="/checkout" element={<ReqAuth><Checkout/></ReqAuth>}/>
   
   </Routes>
  )
}

export default MainRoutes