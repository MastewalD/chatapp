import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth,provider } from '../firebase-config';
import Cookies from "universal-cookie"
const cookies=new Cookies()
export default function Auth() {
const signUnWithGoogle=async ()=>{
   const result=await signInWithPopup(auth,provider); 
    cookies.set("auth-token",result.user.accessToken)
}
  return (
    <div>
      <p>Sign In With Google To Continue</p>
<button onClick={signUnWithGoogle}>Sing In With Google</button>
    </div>
  );
}
