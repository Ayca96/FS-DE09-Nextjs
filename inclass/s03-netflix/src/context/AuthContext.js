'use client'
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/navigation"
import {createContext, useContext, useState} from "react"


export const YetkiContext=createContext()

//* custom hook

export const  useAuthContext=()=>{

  return useContext(YetkiContext)
}


const AuthContextProvider=({children})=>{
  const[currentUser,setCurrentUser]=useState("")
  const router=useRouter()
  useEffect(()=>{
    userTakip()
  })

  const createKullanici = async (email,password,displayName)=>{


    try {
     await createUserWithEmailAndPassword(auth,email,password)

     await updateProfile(auth.currentUser, {
      displayName,
    });

      toastSuccessNotify("register basarili")
      router.push("/login")



    } catch (error) {
      toastErrorNotify(error.message)
     
      
    }

  }

  const signIn= async({email,password})=>{
    try {

      await signInWithEmailAndPassword(auth, email, password)
      toastSuccessNotify("login basarili")
      router.push("/profile")

      
    } catch (error) {
      toastErrorNotify(error.message)
    }
  }

  const signInGoogle=()=>{

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
       router.push("/profile")
       toastSuccessNotify("google girişi başarılı")
      })
      .catch((error) => {
        console.log(error)
      });
    
    
    
    }

  const userTakip=()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
      const {email,displayName,photoURL}=user
        setCurrentUser({email,displayName,photoURL})

      }else{
        setCurrentUser(false)

      }
    })
  }


  return <YetkiContext.Provider value={{createKullanici,signIn,signInGoogle}}>{children}</YetkiContext.Provider>

}

export default AuthContextProvider;