import React from 'react'
import Header from './Header'
import styled from "styled-components"
const Box = styled.div`
width:50%;
height:13vh;
margin:auto;
padding:5px 0px 5px 15px;

margin-top:100px;
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
.box>div:nth-child(1){
  
    font-size:25px;
}
.box>div:nth-child(2){
    font-size:25px;
display:flex;
justify-content:flex-start
}
`

const Checkout = () => {
  return (
    <div>
<Header/>
<Box>
    <div className='box'>
        <div>Checkout</div>
        <div>Thankyou for your order</div>

    </div>

</Box>

    </div>
  )
}

export default Checkout