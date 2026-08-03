import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {

  return (
    <main className='min-h-screen bg-linear-to-b from-gray-50 to-white px-72'>
      <Navbar />
      <Home />
    </main>
  )
}

export default App