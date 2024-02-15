import React,{useState,useEffect} from "react";
export default function Http()
{
    const[data,setdata]=useState([]);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(response=>setdata(response))
})
    console.log(data);
    return(
        <div>
            {data.map(u=>(
                <div>Name: {u.name},Id: {u.id},Email: {u.email}</div>))}
        </div>
    )
}