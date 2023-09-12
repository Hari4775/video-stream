import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';

const Sidebar = () => {     // subscribe the required space (current slice) in the store
  const isMenuOpen =useSelector(store=>store.app.isMenuOpen)
    if (!isMenuOpen)return null
  return (
    <div className='text-left h-full p-6 mx-5 shadow-lg bg-slate-50 w-60 h-screen overflow-y-auto'>
       {/* <MaterialIcon icon="alarm_on" /> */}
       
      <ul >
        <li className='flex flex-wrap mb-6'> 
          <Link to={"/"}>
            <MaterialIcon icon="home" size={24} color="#000" /> 
          </Link>
          <Link to={"/"}>
        <h1 className='ml-5 text-lg'>Home</h1>
        </Link>
        </li>
        <li  className=' flex flex-wrap my-6'>
          <MaterialIcon icon="video_library" color="#000"/>
          {/* <span class="material-icons pt-2">restore</span> */}
          <h1 className='ml-5 text-lg'>Shorts</h1>
       </li>
        <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="subscriptions" color="#000"/>
          <h1 className='ml-5 text-lg'>Subscriptions</h1>
        </li>
      </ul>

    <ul   className='my-12'>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="video_library" color="#000"/>
          <h1  className='ml-5 text-lg'>Library</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="history" color="#000"/>
          <h1  className='ml-5 text-lg'>History</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="slideshow" color="#000"/>
          <h1 className='ml-5 text-lg'>Your videos</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="watch_later" color="#000"/>
          <h1 className='ml-5 text-lg'>Watch later</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="thumb_up_off_alt" color="#000"/>
          <h1 className='ml-5 text-lg'>Liked videos</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="expand_more" color="#000"/>
          <h1 className='ml-5 text-lg'>show more</h1>
      </li>
  </ul> 
  <ul className='mt-8'>
      <li className='my-6'>
        <h1 className="font-semibold text-xl text-black">Explore</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="local_fire_department" color="#000"/>
          <h1 className='ml-5 text-lg'>Trending</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="shopping_bag" color="#000"/>
          <h1 className='ml-5 text-lg'>Shopping</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="music_note" color="#000"/>
          <h1 className='ml-5 text-lg'>Music</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="movie" color="#000"/>
          <h1 className='ml-5 text-lg'>Films</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="settings_input_antenna" color="#000"/>
          <h1 className='ml-5 text-lg'>Live</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="sports_esports" color="#000"/>
          <h1 className='ml-5 text-lg'>Gaming</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="feed" color="#000"/>
          <h1 className='ml-5 text-lg'>News</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="emoji_events" color="#000"/>
          <h1 className='ml-5 text-lg'>Sport</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="lightbulb_outline" color="#000"/>
          <h1 className='ml-5 text-lg'>Learning</h1>
      </li>
      <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="checkroom" color="#000"/>
          <h1 className='ml-5 text-lg'>Fashion & beauty</h1>
      </li>
    </ul>
  <ul  className='mt-14 '>
     <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="settings" color="#000"/>
          <h1 className='ml-5 text-lg'>Settings</h1>
     </li>
     <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="outlined_flag" color="#000"/>
          <h1 className='ml-5 text-lg'>Report history</h1>
     </li>
     <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="help_outline" color="#000"/>
          <h1 className='ml-5 text-lg'>Help</h1>
     </li>
     <li className='flex flex-wrap my-6' >
          <MaterialIcon icon="feedback" color="#000"/>
          <h1 className='ml-5 text-lg'>Send feedback</h1>
     </li> 
  </ul>
  <ul>
    <li className='text-sm text-gray-500 my-3'>About Press Copyright<br/> Contact us Creator Advertise<br/> Developers</li>
    <li className='text-sm text-gray-500 my-3'>Terms Privacy Policy & Safety <br/>How YouTube works<br/>Test new features</li>
    <li className='text-gray-400 mt-4'> 
      <h1>@ 2023 Google LLC</h1></li>
  </ul>

    </div>
  )
}

export default Sidebar