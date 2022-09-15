
import {

  
  Gettingdata_Loading, 
  Gettingdata_SUCCESS,
  Gettingdata_Error,
  Incrementsitems,
  Decrementsitems,
  CartCounter,
  CHECKOUTCOST
} from "./actionTypes";


const initState = {
 Products:[],
  isLoading: false,
  isError: false,
 Cartcounter:0,
 Totalordercost:0,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
   

    case Gettingdata_Loading : 
  
    return {
...state,
isLoading: true,
isError: false,

    }
case Gettingdata_SUCCESS:
  
   
    return {
        ...state,
        isLoading: false,
  isError: false,
  Products:payload
    }
    case Gettingdata_Error: 
    return {
        ...state,
isLoading:false,
isError: true,
Products:[]
    }

    case  Incrementsitems:
console.log(payload)
const item=state.Products.find((prod)=>prod.id===payload.index)
if(item){
  return{
...state,
Products :state.Products.map((item)=>item.id===payload.index ? {
  ...item,
  qty:item.qty+1,
  totalprice:Number(item.totalprice)+Number(item.price)
}:item),




  }
}
return{
  ...state,
  Products:[state.Products,payload],
  totalprice:state.totalprice+payload.price

}

case  Decrementsitems:
  console.log(payload)
  const item1=state.Products.find((prod)=>prod.id===payload.index)
  if(item1){
    return{
  ...state,
  Products :state.Products.map((item)=>item.id===payload.index ? {
    ...item,
    qty:item.qty>1 && item.qty-1,
    totalprice: item.qty>1 && Number(item.totalprice)-Number(item.price)
  }:item),
  
  
  
  
    }
  }
  return{
    ...state,
    Products:[state.Products,payload],
    totalprice:state.totalprice-payload.price
  
  }
  case CartCounter:
   
    console.log(payload)
   
   let count=0
payload.map((el)=>{
 
 
  if(el.qty>=1){
   
count++
    }
  })
  

  return{
...state,
Cartcounter:count

  }




  case  CHECKOUTCOST:{
  let total=0
    payload.map((el)=>{
 
      total+=Number(el.totalprice)
    
      })
      console.log(total)
      return {
        ...state,
        Totalordercost:total
      }
}
  

    default : 
    return state
}
}

export default reducer

