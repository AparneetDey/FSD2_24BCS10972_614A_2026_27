import React from 'react'

const Navigation = () => {
  return (
    <nav className='w-full sticky top-0 flex justify-center items-center py-4'>
      <ul className='flex w-[50%] justify-between items-center'>
        <li className='text-xl font-semibold cursor-pointer'>About</li>
        <li className='text-xl font-semibold cursor-pointer'>Projects</li>
        <li className='text-xl font-semibold cursor-pointer'>Experience</li>
      </ul>
    </nav>
  )
}

export default Navigation