import React,{useState} from "react";
export default function Html()
{
    const[data,setdata]=useState({email:'',password:''});
    
    const handlesumbit=(e)=>{
        e.preventDefault();
       const[name,value]=e.target;

        console.log(data.email);
        console.log(data.password);
    }
    const handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    return(
        <div>
        <form onSubmit={handlesumbit}>
            <label>Email:</label>
            <input type='email' name='email' id="email" onChange={handlechange} required/>
            <br/>
            <label>Password:</label>
            <input type='password' name='password' id="password" onChange={handlechange} minLength={8}/>
            <br/>
           
            <button type='submit'>submit</button>
        </form>
        </div>
    )
}