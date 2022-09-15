
import axios from "axios";


import { Gettingdata_Loading, Gettingdata_SUCCESS,Gettingdata_Error,Incrementsitems,Decrementsitems,CartCounter,CHECKOUTCOST} from "./actionTypes";




export const DataLoading= ()=>({type:Gettingdata_Loading})
export const DataSuccess = (payload)=>({type:Gettingdata_SUCCESS,payload})
export const DataFailure = ()=>({type:Gettingdata_Error})
export const DataIncre=(payload)=>({type:Incrementsitems,payload})
export const DataDecre=(payload)=>({type:Decrementsitems,payload});
export const CartIncre=(payload)=>({type:CartCounter,payload})
export const Totalordercost=(payload)=>({type:CHECKOUTCOST,payload})








export const getData = ()=>async(dispatch)=>{
  dispatch(DataLoading()) 
  try{
    let getData = await axios.get("https://restrauapp.herokuapp.com/products")
   const data=getData.data 
    console.log( getData.data );
 dispatch(DataSuccess( data))
    
  }
  catch(err){
           console.log("Erro is There",err)
           dispatch(DataFailure())
       }
}

export const IncrementedData=(index,product)=>(dispatch)=>{
  //console.log()
  dispatch(DataIncre({index,product}))
}

export const DecrementedData=(index,product)=>(dispatch)=>{
  //console.log()
  dispatch(DataDecre({index,product}))
}

export const CardProd=(payload)=>(dispatch)=>{
dispatch(CartIncre(payload))
}
export const Totalcost=(payload)=>(dispatch)=>{
  dispatch( Totalordercost(payload))
  }



