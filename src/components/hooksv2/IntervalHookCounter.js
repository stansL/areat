import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        // Use of prevCount to reliminate depency error
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
        // using the previous count value to compute the next value would mean we can then specify an empty
        // depencency array!!
        // }, [count]);
    }, []);


    return (
        <div>
            {count}

        </div>
    )
}

export default IntervalHookCounter
