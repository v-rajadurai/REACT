import { useState } from "react";

function DynamicRendering()
{
    
        // const[isValid,setisValid]=useState(false);
        // if(isValid)
        // {
        //     return <h1>Test is failed..</h1>
        // }
        
        // return(
        //     <div>
        //     <h2></h2>
        //     <button onClick={()=>setisValid(true)}>Test is passed..</button>
        //     </div>
        // )
    
        // const[isValid1,setisValid1]=useState(true)
        const[isValid,setIsValid]=useState("Show Component")
        if(isValid ==='Show Component')
        {
            return(
                <div>
             <button onClick={()=>{setIsValid('Hide Component')}}>{isValid}</button>
            </div>
            );
            
        }
        if(isValid==="Hide Component")
        {
            return(
                <div>
                <button onClick={()=>{setIsValid("Show Component")}}>{isValid}</button>
                <p>hi! How are You!!!</p>
                </div>
            );
        }
        
}

export default DynamicRendering;