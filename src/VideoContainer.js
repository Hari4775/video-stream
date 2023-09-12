import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './Utils/Constants'
import Videocard from './Component/Videocard'
import { Link } from 'react-router-dom'
import { Shimmer } from 'react-shimmer'
import ShimmerCard from './Component/ShimmerCard'
import { setVideodata } from './Utils/dataSlice'
import { useDispatch } from 'react-redux'

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

   useEffect(()=>{
      fetchVideos()
},[])

  const fetchVideos=async () => {
    try{
      const data=await fetch(YOUTUBE_VIDEOS_API);
      if(!data.ok){
        throw new Error ("network respondse not ok")
      }
      const json=await data.json()
      setVideos(json.items)
      dispatch(setVideodata(json.items))
      setLoading(false)
    }catch(error){
       console.log(error,"error fetching videos")
    }
  }
  return (

    <div className='flex flex-wrap'>
      
      {loading ? (
       
        //   <div key={index} className='shimmer  bg-red-600 Videocard-placeholder'>
          // </div>
      
           <ShimmerCard/>
        )
       : (
      videos.map((videos => 
      <Link to={"/watch?v="+ videos.id}>
        <Videocard key={videos.id} info={videos}/>
      </Link>
      ))
)}
    </div>
  )
}

export default VideoContainer