import React,{useContext} from "react";
import { myContext } from "./parentComponet";
export default function Child()
{
    const context=useContext(myContext)
    return(
        <>
        <h1>V RAJADURAI</h1><br/>      
          <h1>{context}</h1>
        </>
    )
}