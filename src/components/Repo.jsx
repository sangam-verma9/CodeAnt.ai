import React from 'react'
import { GoDotFill,GoDatabase } from "react-icons/go";
const Repo = ({repo}) => {
  return (
    <div className='  py-2 mx-5 my-2'>
        <div className='flex items-center mb-1'>
            <h4 className=' text-xl font-bold mr-3'>{repo.name}</h4>
            <span className='bg-blue-100 px-2 rounded-3xl text-blue-500 border border-blue-300'>{repo.mode}</span>
        </div>
        <div className='flex'>
            <p className='mr-5 flex items-center'>{repo.Language}<GoDotFill className=' mx-1 text-blue-500'/></p>
            <p className='mr-5 flex items-center'><GoDatabase className='mx-1'/>{repo.storage}</p>
            <p className='mr-5'>Updated {repo.Laste_updaed} day ago</p>
        </div>
    </div>
  )
}

export default Repo