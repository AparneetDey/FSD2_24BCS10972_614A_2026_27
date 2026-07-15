import React from 'react'

const Navigation = () => {
  return (
    <nav className='w-full sticky top-0 flex justify-center items-center py-4 px-24 border-b border-gray-400 backdrop-blur-sm'>
      <ul className='flex w-[50%] justify-between items-center'>
        <li className='text-xl font-semibold cursor-pointer'>About</li>
        <li className='text-xl font-semibold cursor-pointer'>Projects</li>
        <li className='text-xl font-semibold cursor-pointer'>Experience</li>
      </ul>
    </nav>
  )
}

export default Navigation