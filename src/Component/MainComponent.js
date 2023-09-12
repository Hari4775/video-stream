import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from '../VideoContainer'

const MainComponent = () => {
  return (
    <div className='col-span-11 '>
      <Buttonlist/>
      <VideoContainer/>
    </div>
  )
}

export default MainComponent