import { Login_Error, Login_Request, Login_Sucess } from "./action"
let token=localStorage.getItem("token")||""
let initstate={
    isAuth: token ? true : false,
    token: token || "",
    isError: false,
    isLoading: false,
   
}




 export const Authreducer=(state=initstate,{type,payload})=>{
console.log(payload)
switch(type){

case Login_Request:{
  return{
...state,
isAuth:false,
token:"",

isError: false,
isLoading: true
  }

}

case Login_Sucess:{
 
return{
...state,
isAuth:true,
token:payload,
isError:false,
isLoading:false,


}


}

case Login_Error:{
    return{
        ...state,
isAuth:false,
token:"",
isError:true,
isLoading:false
    }
  }
 


default:
    return state


}





}