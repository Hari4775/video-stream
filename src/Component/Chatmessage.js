import React from 'react'

const Chatmessage = ({name,message}) => {

  return (
    <div>
    <div className='flex p-3'>
        <img className='h-8 mx-2' 
        alt='users'
        src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
          <h5 className='mx-2 text-zinc-700'>{name}</h5>
          <h1 className='mx-2'>{message}</h1>
    </div>
    


    

    </div>
    
  )
}

export default Chatmessage