import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import {generateRandomName , generateMessages} from '../utils/helper';

const LiveChat = () => {
 const dispatch = useDispatch();
 const chatData=useSelector(store=>store.chat.messages);
 const [liveComment , setLiveComment]=useState("");
 



  useEffect(()=>{
   const interval=setInterval(()=>{
       //console.log("API polloing");
       
       dispatch(addMessage({
        name:generateRandomName(),
        message:generateMessages(25)
     }));

   },2000);


   return (()=>clearInterval(interval));


  },[])

  return (
    <>
    <div className="p-2 ml-2 border border-t-black border-l-black border-r-black rounded-t-lg w-full h-[500px] bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatData.map((c,i)=>(
            <ChatMessage key={i} 
            name={c.name}
            message={c.message}
            />

        ))}

    </div>
     
     <form className="mx-2 p-2 w-full border border-black" 
     onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name:"Admin",
        message:liveComment
      }))
      setLiveComment("")
     } }
     >
       <input 
       className="w-5/6 px-2 py-1 border border-gray-300 shadow-sm bg-slate-200 rounded-2xl hover:bg-gray-200" 
       type="text" 
       value={liveComment} 
       onChange={(e)=>setLiveComment(e.target.value)}
  
       />
       
  
       <button className="px-2 m-1 bg-green-400 text-white">Send</button>
       
       </form>

      

     </>

  )
}

export default LiveChat