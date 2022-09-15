import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
const MenuPage=styled.div`
display:flex;
justify-content: center;
width:80%;
flex-direction: column;
margin: auto;
.title{
    color:#4f585e;
    font-size: 80px;
    width:70%;
    margin: auto;
    margin-top:20px;
text-align: center;
}
.btn{
    width:100%;
   
    margin-top: 30px;
display: flex;
justify-content: center;
}
.mbtn{
padding: 10px 20px;
border-radius: 4px;
background-color:#0046be ;
color:white;
border: none;
font-size: 16px;
font-weight: 600;
cursor: pointer;
}


`
const Menu = () => {
    const navigate=useNavigate()


  return (
   <>
   <Header/>
   < MenuPage>
    <div className='title'>Welcome to Food's Kitchen</div>
    <div className='btn'><button className='mbtn' onClick={()=>navigate("/items")}>Go To Menu</button></div>
   </ MenuPage>
   </>
  )
}

export default Menu