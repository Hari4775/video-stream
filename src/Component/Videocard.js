import React from 'react'
import { Shimmer } from 'react-shimmer';
import Watchpage from './Watchpage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Videocard = ({info}) => {
  const [detail,setDetail]=useState([])
  const dispatch=useDispatch()

  console.log(info,"details")
  const {snippet,statistics}= info;
  const {channelTitle,title,thumbnails}= snippet;
  console.log(title,"titleee")
    return (
    
    <div className='p-2 m-3 w-72 shadow-lg  text-left '>
      <img className='rounded-lg' src={thumbnails.medium.url} 
        alt='thumbnails'/>
      <ul>
        <li className='font-bold py-2 '> {title}</li>
        <li className='text-gray-500'>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default Videocard