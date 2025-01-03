"use client"

import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const PrivateLayout = ({children})=>{
  const{currentUser}=useAuthContext()
  const router=useRouter()

  useEffect(()=> {

if(!currentUser){
  router.push("/login")
}


  },[])

  return <div>{children}</div>
  
}
export default PrivateLayout;