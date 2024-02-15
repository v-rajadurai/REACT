import {useRef} from 'react';
export default function Hooks()
{
    const count=useRef(0)
    const increment=()=>{
        count.current += 2;
        console.log("Current Count : "+(count.current));
    };
    return(
        <div>
            <h1>count:{count.current}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}