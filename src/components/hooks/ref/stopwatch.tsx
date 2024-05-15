import { useRef, useState } from "react";

export const Stopwatch = () => {

    const [startTime, setStartTime] = useState<number |  null>(null);
    const [now, setNow] = useState<number |  null>(null);
    const [secondsPassed, setSecondsPassed] = useState(0);
    const internalRef = useRef<number |  undefined>(undefined);

    const handleStart = () => {
        setNow(Date.now());
        setStartTime((prevValue) => prevValue ?? Date.now())

        internalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        clearInterval(internalRef.current);
        setStartTime(now);
    }

    const handleReset = () => {
        clearInterval(internalRef.current);
        setStartTime(Date.now());
        setNow(Date.now());
    }

    

    if(startTime != null && now !== null) {
        console.log('now', now)
        console.log('start', startTime)
        if(now !== startTime) {
            setSecondsPassed((now - startTime) / 1000);
        }
    }

    return (
        <div className="flex flex-col container">
            <h2>{secondsPassed.toFixed(3)}</h2>
            <div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 m-2" onClick={handleStart}>Start</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 m-2" onClick={handleStop}>Stop</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 m-2" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}