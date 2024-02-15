import { useState } from "react";

export default function Counter()
{
    const[count,setcount]=useState(0)
    function Increment()
    {
        setcount(count+1);
    }
    function Decrement()
    {
        setcount(count-1);
    }
    return
     (
        <>
        <h1>Count:{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </>
    )
}