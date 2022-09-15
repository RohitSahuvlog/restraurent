import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { CardProd, DecrementedData, IncrementedData, Totalcost } from '../Redux/Products/actions';
import Header from './Header';

const Boxwhole=styled.div`
width:50%;
margin-top:100px;
display:flex;
justify-content: center;
flex-direction:column;

margin-left:20%;
box-shadow: 0 0 10px;

`




const Box= styled.div`
display:flex;
width:100%;
height:30%;
space:5px;
margin:auto;



div{
  margin:2px;
  width:40%;
  diplay:flex;
 
  justify-content:space-between;
  
}


`


const Boxtop=styled.div`

width:50%;
height:40%;

display:flex;
 justify-content: center;
flex-direction:column;
margin:auto;

.map{
  display:flex;

}

.mapbtn1{
  width:50px;
  height:25px;
  background-color:#0046be ;
  color:white;
  border-radius: 4px;
  font-size:17px;
  border-radius: 4px;
  border: none;

}

.mapbtn2{
  width:50px;
  height:25px;
  background-color:red ;
  border: none;
  color:white;
  border-radius: 4px;
  font-size:17px;
  border-radius: 4px;
  
}


`

const Boxdiv=styled.div`

width:100%
border:1px solid grey;
display:flex;
margin-left:50%;
.totalcost{
  margin-left:-50%;
}


.nextbtn1{
  width:100px;
  height:50px;
  background-color:#0046be ;
  color:white;
  border-radius: 4px;
  font-size:17px;
  border-radius: 4px;
  margin: 20px 0px;
  border: none;
}

.nextbtn{
  width:100px;
  height:50px;
  background-color:#b2b2b2 ;
  color:white;
  border-radius: 4px;
  font-size:17px;
  border-radius: 4px;
  margin: 20px 0px;
  border: none;
}
.next{
  display:flex
}

.next>div{
  margin:20px
}

.totalcost{
  font-weight: bold;
}

`

const Ordersummery = () => {
  const {Totalordercost,Products} = useSelector((state)=>state.reducer)
  console.log(Totalordercost)
  
const dispatch=useDispatch();
  const navigate = useNavigate()

  const HandleIncre=(index)=>{
    dispatch( IncrementedData(index+1,Products));
    dispatch(CardProd(Products))
   

    }
 
    const HandleDecre=(index)=>{
        dispatch( DecrementedData(index+1,Products))
      
    
        }


  const Navigatefunc=()=>{
  
    navigate("/checkout")
  }
  const Navigatefunc2=()=>{
  
    navigate("/items")
  }

  useEffect(()=>{
    dispatch(Totalcost(Products))
  },[Products])
  return (
    <>
    <Header/>
    <Boxwhole>
    <div className='oder'>Order Summery</div>
    <Boxtop>
     
{Products.map((item,index)=>{
  console.log(item)
  if(item.qty>=1){
return <Box key={index}>
     <div>{item.name}
    </div>
    <div>{item.qty}</div>

    <div className='map'>

    <div >
      
      <button  className='mapbtn1' onClick={()=>HandleIncre(index)}>+</button>
    </div>
  
    </div>
    <div>
      
      <button  className='mapbtn2' onClick={()=> HandleDecre(index)}>-</button>
    </div>
   

    </Box>
   
  }
})}

     


      
    </Boxtop>
    <Boxdiv>
    <div className='totalcost'> Totalordercost :     {Totalordercost} </div>
    <div className='next'>
    <div>    <button  className='nextbtn1' onClick={Navigatefunc}>Go to Checkout</button></div>
      <div>    <button  className='nextbtn' onClick={Navigatefunc2}>Cancel</button></div>
    </div>
     

    </Boxdiv>


    </Boxwhole>
    </>
  )
}

export default Ordersummery