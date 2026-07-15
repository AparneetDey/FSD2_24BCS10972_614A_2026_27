import React from 'react'

const Header = () => {
  return (
    <header className='w-full py-2 flex justify-between items-center'>
      <div>
        <h1 className='text-4xl font-bold'>Aparneet Dey</h1>
        <p>Full-stack Developer</p>
      </div>

      <img className='w-20 h-20 rounded-4xl' src="https://avatars.githubusercontent.com/u/1234567890?v=4" alt="Aparneet Dey" />
    </header>
  )
}

export default Header