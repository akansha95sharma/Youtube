import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState();
    const dispatch = useDispatch();
    const chatMessages = useSelector(store=> store.chat.messages);
    useEffect(() => {
        const i = setInterval(()=>{
            // API Polling
            console.log("API Polling");
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20)
            }));
        },1500);
        return () => clearInterval(i);
     },[]);
    return (
        <>
        <div className='w-full h-[600px] ml-2 p-2 overflow-y-scroll border border-black bg-slate-100 rounded-lg flex flex-col-reverse'>
        <div>{chatMessages.map((c,index) => <ChatMessage key={index} name={c.name} message={c.message}/>)}    </div>
        
         </div>
         <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Akansha Sharma",
                message:liveMessage
            }))
            setLiveMessage("");
        }}>
            <input className='px-2 w-72' type='text' onChange={(e)=> setLiveMessage(e.target.value)}/>
            <button className='px-2 mx-2 bg-green-100'>Send</button>
        </form>
        </>
    )
}

export default LiveChat
