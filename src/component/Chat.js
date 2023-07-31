 import React,{useState} from 'react';
import {addDoc,collection,serverTimestamp} from "firebase/firestore"
import {db,auth} from "../firebase-config"
export default function Chat(props) {
    const {room} =props
    const [newMessage,setNewMessage]=useState('')
    const messagesRef=collection(db,"messages")
    const handleSubmit=async(e)=>{
        e.prevetDefault()
        if(newMessage === "") return ;
     await addDoc(messagesRef,{
    text:newMessage,
createdAt: serverTimestamp() ,
user: auth.currentUser.displayName,
room, 
})
      setNewMessage("")  
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
