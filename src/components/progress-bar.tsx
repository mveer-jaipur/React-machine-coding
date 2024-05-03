import { useEffect, useState } from "react";
import { Max, Min } from "../constants";

export const ProgressBar = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setValue((val) => Math.min(Max, Math.max(val, Min)) + 1);
        }, 100)


    }, []);

    return (<div className="flex justify-center items-center flex-col">
        progress bar
        <div className="w-80 h-6 bg-slate-200 flex rounded-lg overflow-hidden">
            <span className="absolute w-80 flex justify-center align-middle"> {value}</span>
            <div className="h-6 bg-green-400" style={{width: `${value}%`}}></div>
        </div>
    </div>)
}