import {
    Routes,
    Route,
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom'
  import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import Home from './homepage'
import About from './contact'
import Contact from './about'
  
  export default function Nav2() {
    return (
      <Router>
        <AppBar sx={{ width: '100vw', marginButtom: '20rem', backgroundColor:"green"}}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ flexGrow: 2 }}
            >
              Music
            </Typography>
            <Link style={{ marginLeft: '10px', textDecoration: 'none' }} to="/">
              <Typography variant="h6" color={'white'}>
                Home
              </Typography>
            </Link>
            <Link
              style={{ marginLeft: '10px', textDecoration: 'none' }}
              to="/about"
            >
              <Typography variant="h6" color={'white'}>
                About
              </Typography>
            </Link>
            <Link
              style={{ marginLeft: '10px', textDecoration: 'none' }}
              to="/contact"
            >
              <Typography variant="h6" color={'white'}>
                Contact
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    )
  }