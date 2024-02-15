import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function InvaliApi()
{
    const[data,setdata]=useState([]);
    const[error,seterror]=useState(null);
    const handle=async()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/songs")
        .then((response)=>{
            setdata(response.data)
        })
        .catch(error=>{

            seterror("Something went Wrong");
        })
        
    }
    return(
        <div>
        {error && <h1>{error}</h1>}
        <button onClick={handle}>Fetch</button>
        </div>
    )
}