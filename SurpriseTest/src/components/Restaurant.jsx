import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import FoodMenu from './FoodMenu'
import UserInfo from './UserInfo'

//{user} - used prop drilling
const Restaurant = () => {
    const [cart, setCart] = useState(0);

    const handleAddToCart = () => {
        setCart(cart + 1);
    }

    useEffect(() => {
        console.log("Cart updated. Total items: ",cart);
    }, [cart]);

    return (
        <article className='flex flex-col gap-4'>
            <Cart cart={cart} />
            <FoodMenu handleAddToCart={handleAddToCart} />
            <UserInfo />
        </article>
    )
}

export default Restaurant