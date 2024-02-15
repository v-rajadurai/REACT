import React, { useEffect, useState } from "react";
export default function Hooks()
{
    const[message,setMesssage]=useState("Hello dear one,learning React...?");
    useEffect(()=>
    {
        console.log("use effect hook called");
        setTimeout(()=>
        {
            setMesssage("Great.... This is time to learn about HOOKS");
        },2000)
    },[]);
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}