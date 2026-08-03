import React from 'react'
import { useAuth } from '../context/AuthContext'
import useUser from '../hooks/useUser'

//{user, cart} - used prop drilling at first
//const {user} = useAuth() - used context api
const Cart = ({cart}) => {
    const {name, location} = useUser();

    return (
        <div>
            <p className='text-xl font-semibold'>Welcome, {name}</p>
            <div className='flex justify-between items-center text-[16px] text-gray-800'>
                <p>Location: {location}</p>
                <p>Cart: {cart}</p>
            </div>
        </div>
    )
}

export default Cart