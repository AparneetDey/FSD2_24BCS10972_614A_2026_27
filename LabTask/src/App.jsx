import React, { useState } from 'react'
import Todo from './components/todo/Todo'
import Stopwatch from './components/stopwatch/Stopwatch'
import Counter from './components/counter/Counter'
import CurrencyConverter from './components/currency_convertor/CurrencyConverter'
import PropDrilling from './components/prop_drilling/PropDrilling'
import ContextAPI from './components/context_api/ContextAPI'
import { Link, Route, Routes } from 'react-router'

const comps = {
    "Counter": {
        path: "/counter",
        element: <Counter />
    },
    "Stopwatch": {
        path: "/stopwatch",
        element: <Stopwatch />
    },
    "Todo": {
        path: "/todo",
        element: <Todo />
    },
    "Currency Converter": {
        path: "/currency-converter",
        element: <CurrencyConverter />
    },
    "Prop Drilling": {
        path: "/prop-drilling",
        element: <PropDrilling />
    },
    "Context API": {
        path: "/context-api",
        element: <ContextAPI />
    },
}

const App = () => {

    return (
        <main className='w-full h-screen'>
            <nav className='w-full flex justify-around py-4 mb-24 flex-wrap gap-y-2'>
                {Object.keys(comps).map((name, ind) => (
                    <Link to={comps[name].path} className='bg-yellow-400 border-yellow-900 btn' key={ind}>{name}</Link>
                ))}
            </nav>
            <div className='flex justify-center items-center'>
                <Routes>
                    {Object.keys(comps).map((ele, ind) => (
                        <Route key={ind} path={comps[ele].path} element={comps[ele].element} />
                    ))}
                    <Route path='*' element={<h1>Bro! Wrong place!! 404 - NOT FOUND</h1>} />
                </Routes>
            </div>
        </main>
    )
}


export default App