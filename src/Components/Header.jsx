import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { CardProd, CartIncre, Totalordercost } from '../Redux/Products/actions';
import { useNavigate } from 'react-router-dom';
const Headers=styled.div`
    background-color:#0046be ;
    width:100%;
    height:60px;
    display:flex;
    align-items: center;
    justify-content: space-between;
  .logo{
    color:white;
    margin-left: 10px;
  }
  .title{
    color:white;
    font-size: 25px;
   
    margin-left: 10px;
  }
  .cart{
    font-size: 22px;
    margin-right: 30px;
    position:relative;
    z-index:0;
    cursor: pointer
    

  }
  .main{
    display: flex;
  }
  .counter{

    color:white;
   margin-right: 40px;
    text-align:center;
z-index:1;
cursor: pointer
    
  }


    `

const Header = () => {
  const [count,Setcount]=useState(0)
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const {Products, Cartcounter}=useSelector((state)=>state.reducer);
 console.log(Products)
  useEffect(()=>{
   dispatch(CardProd(Products))
  },[Products])
  console.log(count)
  const Navigatefunc=()=>{
    dispatch( Totalordercost(Products))
    navigate("/ordercost")
}
  return (
    <>
<Headers>
  <div className='main'>
      <div><svg  className='logo'   xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path  fill="#FFFFFF" d="M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z"/></svg></div>  
      <div className='title'>Food's Restraurent</div> 
      </div>
      <div><AiOutlineShoppingCart className='cart' onClick={Navigatefunc}/><span className='counter'>{Cartcounter}</span></div> 
    </Headers>
    
    
    </>
  )
}

export default Header