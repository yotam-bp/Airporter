import React, { useEffect, useState } from 'react'

export const Counter = () => {

    const [seconds, setSeconds] = useState(0);
    const [startCount, setStartCount] = useState()
    useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
}, []);
}