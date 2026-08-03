import React from 'react'
import { useAuth } from '../context/AuthContext';
import useUser from '../hooks/useUser';

//{user} - used prop drilling
// const {user} = useAuth(); - used context api
const UserInfo = () => {
    const {name, email, location} = useUser();

    return (
        <div className='border-t-2 border-gray-400 py-4'>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default UserInfo