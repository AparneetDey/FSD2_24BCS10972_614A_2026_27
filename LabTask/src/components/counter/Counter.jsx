import React, { useMemo } from 'react'
import useCounter from '../../hooks/useCounter'
import Sum from './Sum';

const Counter = () => {
  const {count, increment, decrement, reset} = useCounter(0);

  console.log("Counter Function");

  const total = useMemo(() => {
    console.log("Sum 2");

    let sum = 0;
    for(let i=1; i<=100; i++) {
      sum += i;
    }

    return sum;
  }, [])

  return (
    <main className='container'>
      <div className='box'>
        <h2 className='heading'>Counter</h2>
        <p className='card'>{count}</p>
        <div className='flex gap-2'>
          <button className='bg-green-500 border-green-900 btn px-4' onClick={() => increment()}>+</button>
          <button className='bg-green-500 border-green-900 btn px-4' onClick={() => decrement()}>-</button>
          <button className='bg-green-500 border-green-900 btn' onClick={() => reset()}>Reset</button>
        </div>

        <Sum />
        <p className='card'>Using useMemo to<br></br> calculate sum and prevent<br></br> unneccessary rerendering:<br></br> {total}</p>
      </div>
    </main>
  )
}

export default Counter