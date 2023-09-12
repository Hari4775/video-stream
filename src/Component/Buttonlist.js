import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  const btns=["All","trending","kids","actions","Muvies","News","Cartoon","Sports","Entairtainment","Information"]
 
    
  return (
    <div className='flex'>
      <Button name={btns}/>
    </div>
  )
}

export default Buttonlist