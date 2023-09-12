import React from 'react'

const ShimmerCard = () => {
  return (
    <div className=' flex flex-wrap'>
        { Array.from({ length: 10 }).map((_, index) => (
         <div className='p-2 m-3 w-72 h-60 shadow-lg bg-slate-100 text-left shadow-lg '>
          <div className='bg-slate-300 w-70 h-40 border rounded-lg'></div>
       <div className=''>
         <ul>
            <li className='font-bold p-2 ml-16 h-5 w-52 my-1 rounded-md bg-slate-300 '> </li>
            <li className='font-bold py-2 bg-slate-300 my-1 rounded-md h-6'>   </li>
            <li className='font-bold py-2 my-1 bg-slate-300 h-6 flex flex-wrap rounded-md'> <span className='font-bold mx-4 bg-blue-600'> </span></li>
         </ul>
         </div>
    
      </div>
        ))
}
    </div>
  )
}

export default ShimmerCard