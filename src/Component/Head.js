import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'
import MaterialIcon from 'material-icons-react';

const Head = () => {
  
const dispatch=useDispatch()

 const  toggleMenuHandler=()=>{
   dispatch(toggleMenu()
   )
 }

  return (
    <>
  <div className='grid grid-flow-col shadow-lg bg-slate-50 p-3  '>

    <div className='flex col-span-1 '>
      <img className='h-14 m cursor-pointer '
      onClick={()=>toggleMenuHandler()}
      alt='hamburger' src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'/>
     <a href='/'>
      <img className='h-14'
      alt='logo' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'/>
   </a> </div>

    <div className=' flex col-span-10 px-14 p-4'>
      <input className=' border border-blue-500 w-9/12 h-8   rounded-l-full cursor-pointer 'placeholder='Search' type='text'/>
      <button  className='bg-gray-200 w-10 h-8 rounded-r-full'> <span>
      <MaterialIcon icon="search" color="#000" /> </span>
      </button>
      <div className='ml-5 mt-1'>
      <MaterialIcon icon="mic" color="#000" />
      </div>

    </div>

    <div className='col-span-1 p-4 flex flex-wrap'>
      <div className='mx-3 flex flex-wrap'>   
         <MaterialIcon icon="video_call" color="#000" />
      </div>
      <div className='mx-3 flex  flex-wrap'>
      <MaterialIcon icon="notifications" color="#000" />
      </div>
      <div className=' flex flex-wrap'>
      <MaterialIcon icon="account_circle" color="#000" />
      </div>
    </div>

  </div>
    </>
  )
}

export default Head