import React from 'react'

const foods = [
    {
        name: "Pizza",
        price: 10
    },
    {
        name: "Burger",
        price: 20
    },
    {
        name: "Pasta",
        price: 30
    },
]

const FoodMenu = ({handleAddToCart}) => {
  return (
    <div>
        <h2 className='text-xl font-bold'>Food Menu</h2>
        <div className='flex flex-col gap-4'>
            {foods.map((food) => (
                <div className='flex justify-between items-center'>
                    <p className='text-[18px] text-gray-800'>{food.name}</p>
                    <p className='text-[18px] text-gray-800'>${food.price}</p>
                    <button onClick={handleAddToCart} className='border-2 border-gray-600 rounded-md px-2 py-1 cursor-pointer'>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FoodMenu