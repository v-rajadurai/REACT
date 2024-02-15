import { useState } from "react";

function Count()
{
    const[count,setCount]=useState(0)
    function change1()
    {
        setCount(count+1);
    }
    function change2()
    {
        setCount(count-1);
    }
    return(
    <div>
    <label>Data: {count}</label>
        <br/>
    <button onClick={change1}>Increase</button>

    <button onClick={change2}>Decrease</button>
    </div>
    );
}
export default Count;