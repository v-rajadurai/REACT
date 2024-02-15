import { useState } from "react";

function FunctionComponent()
{
    const [count,setCount]= useState(0);
    function changeCount1()
    {
        setCount(count+1);
    }
    function changeCount2()
    {
        setCount(count-1);
    }
    return (
        <div>
        <h2>count : {count}</h2>
        <button onClick={changeCount1}>Increment</button>
        <br></br>
        <button onClick={changeCount2}>Decrement</button>
        </div>

    );
}
export default FunctionComponent;