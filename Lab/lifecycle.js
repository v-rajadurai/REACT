import { useEffect } from "react";

export default function Life()
{
    useEffect(()=>{
    console.log("mounted")
    return()=>{
        console.log("unmount")
    };
},[]);
useEffect(()=>{
    console.log("updated")
    
});
}