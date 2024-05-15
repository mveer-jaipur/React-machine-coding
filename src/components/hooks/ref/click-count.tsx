// Requirement -  Log the button count but does not show on UI
// Solution
//      - As we do show the counter on UI means, counter information is not needed for rendering

import { useRef } from "react";

//        Which means we can use useRef instead of useState
export const ClickCounter = () => {
    const counterRef = useRef(0);

    const handleClick = () => {
        counterRef.current = counterRef.current +  1;
        console.log(counterRef.current);
    }

    return (
        <button onClick={handleClick}>Click Me </button>
    )

}