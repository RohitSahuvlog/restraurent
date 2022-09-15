import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { CardProd, DecrementedData, getData, IncrementedData, Totalordercost } from '../Redux/Products/actions';
import { useState } from 'react';
import Header from './Header';
import { Navigate, useNavigate } from 'react-router-dom';
const Wrapper=styled.div`

width:90%;
height: auto;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(auto);

margin: auto;
margin-top: 30px;
grid-gap:20px;
.card{
    margin-top:10px ;
   box-shadow:1px 1px 10px  #4f585e;

}

.image{
    width:100%;
    height: 300px;
}
.title{
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
    color:#4f585e;

}

.price{
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
    color:#4f585e;
}

.btn1{
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 10px 20px;
border-radius: 4px;
background-color:#0046be ;
color:white;
border: none;
font-size: 16px;
font-weight: 600;
cursor: pointer;
}

.btn2{
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 10px 20px;
border-radius: 4px;
background-color:#b2b2b2 ;
color:white;
border: none;
font-size: 16px;
font-weight: 600;
cursor: pointer;
}
`

const Box=styled.span`

button{
    width:100px;
    height:40px;
    background-color:#0046be ;
    color:white;
    border-radius: 4px;
    font-size:17px;
    border-radius: 4px;
    margin-bottom: 10px;
}

`



const Items = () => {
  
   
 

const dispatch=useDispatch();
const {Products}=useSelector((state)=>state.reducer);
const HandleIncre=(index)=>{
    dispatch( IncrementedData(index+1,Products));
    dispatch(CardProd(Products))
   

    }
 
    const HandleDecre=(index)=>{
        dispatch( DecrementedData(index+1,Products))
      
    
        }
console.log(Products)
   useEffect(()=>{
dispatch(getData())
   },[])


  

  return (
   <>
   <Header/>
  <Wrapper>
{Products.map((elem,index)=>{
return (<div className='card' key={index}>
<div className='imgwrapper'>
    <img className='image' src={elem.image} alt="not found"/>
</div>
<div>
    <h5 className='title'>{elem.name}</h5>
</div>
<div>
    <p className='price'>price:{elem.price}</p>
</div>
{elem.qty>=1?<><div>
    <p className='price'>Quantity:{elem.qty}</p>
</div>
<div>
    <p className='price'>TotalPrice:{elem.totalprice}</p>
</div></> :null}

<div>
    <button className='btn1' onClick={()=>HandleIncre(index)}>+</button>
    <button className='btn2' onClick={()=>HandleDecre(index)}>-</button>
</div>
</div>)
})}


  </Wrapper>
  <Box>

  </Box>
  
   </>
  )
}

export default Items

// {name: 'Hamburger', price: '200', image: 'burger.jpeg'