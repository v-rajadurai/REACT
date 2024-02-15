import React,{useState} from "react";
export default function Validate()
{
    const[data,setdata]=useState({email:'',password:''});
    const[error,seterror]=useState({email:'',password:''});
    const handlesumbit=(e)=>{
        e.preventDefault()
        seterror({email:'',password:''})
        const regex=/[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(regex.test(data.email))
        {
            seterror({...error,email:"Invalid email"})
        }
        if(data.password.length < 8)
        {
            seterror({...error,password:"Invalid password"})
        }
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
            <input type='text' name='email' id="email" onChange={handlechange} />
            <br/>
            <label>Password:</label>
            <input type='text' name='password' id="password" onChange={handlechange} />
            <br/>
           
            <button type='submit'>submit</button>
        </form>
        </div>
    )
}