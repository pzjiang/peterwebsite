import { useState, useEffect } from 'react';

function useInterval(callback, delay) {
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        if (!timer) {
            return;
        }
        const interval = setInterval(() => {
            callback();
        }, delay);

        return (()=>{
            clearInterval(interval);
            setTimer(false);
        });
    },[timer]);

    return [()=>{setTimer(true)}, ()=>{setTimer(false)}, timer];
}

export {useInterval};