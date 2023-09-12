import React from 'react'

const Button = (props) => {
  const btncollection=props.name

  return (
    <div className='flex' >

   {btncollection.map((item)=>(
    <div key={item}>
    
  <button className=' px-3 py-1 m-3 bg-slate-200 border rounded-lg'>{item}</button>

  </div>))   
}

    </div>
  )
}

export default Button