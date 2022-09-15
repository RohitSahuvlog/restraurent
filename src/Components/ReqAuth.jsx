import { useSelect } from "@mui/base";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const ReqAuth=({children})=>{
    const token =useSelector((state)=>state.Auth.token)
  

if(token){
 return children
}

return <Navigate to="/login"/>

}

    
export default ReqAuth