import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth,provider } from '../firebase-config';
import Cookies from "universal-cookie"
const cookies=new Cookies()
export default function Auth(props) {
  const {setIsAuth}=props
const signUnWithGoogle=async ()=>{
  try{
   const result=await signInWithPopup(auth,provider); 
   console.log(result)
    cookies.set("auth-token",result.user.accessToken)
    setIsAuth(true)
  } catch(err){
    console.error(err)
  }
}
  return (
    <div>
      <p>Sign In With Google To Continue</p>
<button onClick={signUnWithGoogle}>Sing In With Google</button>
    </div>
  );
}
