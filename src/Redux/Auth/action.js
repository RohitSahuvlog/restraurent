import axios from "axios";

 //import axios from "axios";
export const Login_Request=" Login_Request";
 export const Login_Sucess="Login_Sucess";
 export const Login_Error=" Login_Error";


  export const loginrequest=()=>({
     type:Login_Request,

 })

  export const loginsucess=(token)=>({
type: Login_Sucess,
payload:token
 })


 export const loginerror=(err)=>({
     type:Login_Error,
     payload:err
 })


 export const Loginuser=(payload)=>async(dispatch)=>{
  const form ={
    
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  
  }
dispatch(loginrequest());

try{
  
        let res=await axios.post("https://reqres.in/api/login",form);
        let data=await res.data;
        dispatch(loginsucess(data.token))
    localStorage.setItem("token",data.token)
       
    
}catch(err){
    dispatch( loginerror())

}
}


