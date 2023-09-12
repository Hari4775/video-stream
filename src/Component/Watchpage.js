import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import Commentcontainer from './Commentcontainer'
import LiveChat from './LiveChat'
import {useSelector} from 'react-redux'
import { YOUTUBE_VIDEOS_BYID } from '../Utils/Constants'
import MaterialIcon from 'material-icons-react';
import CommentsContainer from './Commentcontainer'
import { YOUTUBE_VIDEOS_API } from '../Utils/Constants'
import { Link } from 'react-router-dom'


const Watchpage = () => {
  const [searchparams]=useSearchParams()
  const [videoInfo,setVideoInfo]=useState([])
  const [suggestvideo,setSuggestvideo]=useState([])

   const videoid=searchparams.get("v")
   const videoDetails=YOUTUBE_VIDEOS_BYID + videoid

   useEffect(()=>{
    const getVideoinfo=async ()=>{
      const data=await fetch(videoDetails)
      const json=await data.json()
      console.log(json,"jsonss")
      setVideoInfo(json.items)
    };
    getVideoinfo()
   },[])

   const [suggestionVideo, setSuggestionVideo] = useState([]);

   useEffect(() => {
     const getSubscriber = async () => {
       const data = await fetch(YOUTUBE_VIDEOS_API);
       const json = await data.json();
       console.log(json);
       setSuggestionVideo(json.items);
     };
     getSubscriber();
   }, []);
  

  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(closeMenu())
  },[])

  return (
    <div className='px-5 '>
      <div className='flex'>
      <div>
      <iframe 
      width="750"
      height="400"
      src={"https://www.youtube.com/embed/"+searchparams.get("v")} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
       
       {videoInfo.map((item)=>{
        return(
          <>
          <div  className="mt-5" key={item.id}>
            <h1 className='font-bold text-xl flex-wrap text-left my-3'>{item?.snippet?.title}</h1>
            <div className='flex'>
              <div className='flex flex-wrap ml-20 my-4 '>
               <ul className='flex flex-wrap my-4'>
                   <li className="font-bold text-gray-800 ml-2  ">
                     <h1 className='left-0 mb-0'> {item?.snippet?.channelTitle} <br/>
                     <span className='text-sm font-light text-gray-500 mt-0'>2.5 Subscribers</span></h1> 
                   </li>

                   <li>
                    <button className='bg-slate-100 mt-2  hover:bg-gray-200 text-black h-8 rounded-full w-14 ml-6'>Join</button>
                   </li>
                    <l1>
                    <button  className='py-1 mt-2 mx-3 w-22  bg-slate-700 h-8  hover:bg-gray-950 flex flex-wrap shadow-sm px-2 rounded-full  bg-gray-800 text-white rounded-full font-light   '> 
                       Subscribe
                   </button>
                    </l1>

                    <li>
                    <button className=" flex  bg-transparent px-2 py-1  rounded-full m-2 hover:bg-gray-300 ml-6">
                          <MaterialIcon icon="thumb_up" color="#000"  />{" "}<span className='mx-2'></span>
                          {item?.statistics?.likeCount} |{" "}
                          <MaterialIcon icon="thumb_down" color="#000" />
                    </button> 
                    </li>

                    <li>     
                    <button className="flex bg-transparent  mx-2 shadow-sm px-2 py-1 rounded-full m-2 hover:bg-gray-300 ">
                          <MaterialIcon icon="share" color="#000"/> Share
                    </button>
                    </li>

                    <li>
                     <button className=" bg-transparent  px-2 py-1  rounded-full m-2 hover:bg-gray-300 ">
                          <MaterialIcon icon="more_horiz" color="#000"/>
                      </button>
                    </li>


               </ul>
              </div>
            </div> 
          </div>

          <div className="m-2 rounded-lg shadow-sm bg-gray-100 p-2 my-4">
                  <p className="font-bold text-left">
                    {item?.statistics?.viewCount} Views {" "}
                    <span className='mx-2'>  {item?.snippet?.publishedAt} </span></p>    
                  <p className='font-normal text-left'> {item?.snippet?.description}</p>

          </div>
                {/* Comment Section */}
                <div className="mt-5">
                  <h1 className="m-2  font-bold text-left">
                    {item?.statistics?.commentCount} Comments.
                  </h1>
                </div>
                <Commentcontainer/>
          </>
        )
       })}
    </div>
    {/* Right side  section  live chat*/}
    <div>
    <div className='w-full mb-8'>
      <LiveChat/>
    </div>
    {suggestionVideo.map((info) => {
            return (
              <>
                <Link to={"?v=" + info.id} key={info.id}>
                  <div className=" my-3  mx-10 w-82  flex h-30 hover:bg-gray-200 rounded-md">
                   <img
                      className="rounded-xl w-72"
                      src={info?.snippet?.thumbnails?.default?.url}
                      alt="thumails"
                    />
                 
                    <ul className="ml-2 w-28 text-ellipsis  overflow-hidden">
                    
                      <li className="font-bold text-sm text-gray   w-[28rem] text-ellipsis overflow-hidden"> 
                        {info?.snippet?.title}
                      </li>
                      <li className="text-sm  overflow-hidden">{info?.snippet?.channelTitle}</li>
                      <li className="text-sm  overflow-hidden">
                        {info?.statistics?.viewCount} Views
                      </li>
                    </ul>
                    </div>
                </Link>
              </>
            );
          })}
        

    </div>
    </div>
    </div>
  )
}

export default Watchpage