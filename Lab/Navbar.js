import React from "react";
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import { AppBar, Button,  Toolbar} from "@mui/material";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Nav()
{
    return(
       <BrowserRouter>
       <AppBar>
        <Toolbar>
       <Link to="/" style={{textDecoration:'none'}}>
            <Button  sx={{color:'white'}}>Home </Button>
        </Link>
       <Link to="/about" style={{textDecoration:'none'}}>
            <Button  sx={{color:'white'}}>About </Button>
        </Link>
       <Link to="/contact" style={{textDecoration:'none'}}>
            <Button  sx={{color:'white'}}>Contact</Button>
        </Link>
        </Toolbar>
        </AppBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
        </BrowserRouter>
      
    )
}