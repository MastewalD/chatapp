
import './App.css';
import { useState,useRef } from 'react';
import Auth from './component/Auth';
import Cookies from 'universal-cookie';
import Chat from "./component/Chat"
const cookies=new Cookies()

function App() {
  const [isAuth,setIsAuth]=useState(cookies.get("auth-token"))
  const [room,setRoom]=useState(null)
  const roomInput =useRef(null)
if(!isAuth){
  return (
    <div className="App">
     <Auth setIsAuth={setIsAuth}/>
    </div>
  );}
  return <div>
    {room ?<Chat room={room}/>:<div>
      <label>Enter the room name</label>
      <input ref={roomInput} />
      <button onClick={()=>setRoom(roomInput.current.value)}>enter chat</button>
      </div>}
  </div>
}

export default App;
