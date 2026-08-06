import React from 'react'

const Sum = React.memo(() => {
    const totalSum = () => {
        let sum = 0;
        console.log("Sum function")
        for(let i = 1; i<=1000; i++) {
            sum += i;
        }

        return sum;
    }

    const totalSumValue = totalSum();

    return (
        <p className='card'>Using React.memo to<br></br> calculate sum and prevent<br></br> unneccessary rerendering:<br></br> {totalSumValue}</p>
    )
})

export default Sum