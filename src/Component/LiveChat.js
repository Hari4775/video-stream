import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/ChatSlice'
import store from '../Utils/Store'
import { generateRandomname } from '../Utils/Helper'
import { generateRandomMessages } from '../Utils/Helper'
import MaterialIcon from 'material-icons-react';


const LiveChat = () => {
    const [livemessage,setLivemessage]=useState("")
    const dispatch=useDispatch()
    const chatMessage=useSelector(store=>store.chat.messages)


    useEffect(()=>{
       const i= setInterval(()=>{
       //api callling

        //dispatch the action (addMessage)
        dispatch(addMessage({
            name:generateRandomname(),
            message:generateRandomMessages(15),
        }))
    },1500);
    return ()=>clearInterval(i)
    },[])

  return (
    <>
    <div className='overflow-y-scroll mx-10 my-3 border border-b-slate-50 w-4/5 h-[400px] rounded-t-xl overflow-y-hidden flex flex-col-reverse '>    
       <div>{chatMessage.map((item,i)=>
        <Chatmessage  key={i} name={item.name}
         message={item.message}/>
        )}
        </div>
    </div>

     <form onSubmit={(e)=>{e.preventDefault();
          dispatch(addMessage({
            name:"Harikumar v",
            message:livemessage,}));
          setLivemessage("")
          }} 

        className=' flex w-4/5 mx-10  rounded-b-full border-blue-100 h-16'>
     
       <input type='text' 
       value={livemessage}
       placeholder='send message...'
       onChange={(e)=>{setLivemessage(e.target.value)}}
       className='flex w-72 mx-3 border mt-4 border-blue-500  rounded-full ' 
        />

       <button  className='to-blue-700 px-2  py-7 flex-wrap'>
       <MaterialIcon icon="send" color=""/></button>
    </form>

  </>
  )
}

export default LiveChat