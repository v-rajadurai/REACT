import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'
import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import Homepage from './Home'
import Singers from './Singer'
import Albums from './Album'

export default function Nav() {
  return (
    <Router>
      <AppBar sx={{ width: '100vw', marginButtom: '20rem', backgroundColor:"black"}}>
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
            to="/singer"
          >
            <Typography variant="h6" color={'white'}>
              Singer
            </Typography>
          </Link>
          <Link
            style={{ marginLeft: '10px', textDecoration: 'none' }}
            to="/album"
          >
            <Typography variant="h6" color={'white'}>
              Album
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/singer" element={<Singers/>} />
        <Route path="/album" element={<Albums/>} />
      </Routes>
    </Router>
  )
}