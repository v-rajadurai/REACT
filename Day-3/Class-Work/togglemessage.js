import { useState } from 'react'

function Toogle() {
    
  const [show, setMessage] = useState('Show Component')
    
  const [mess,setMess] = useState('');

  const handleChange = () => {

    if (show === 'Show Component') 
    {
      setMessage('Hide Component');
      setMess('Hi! How are You!!!');
    }

    else if (show === 'Hide Component') 
    {
      setMessage('Show Component')
      setMess('');
    }
  }

  return (
    <>
      <button onClick={handleChange}>{show}</button>
      <h1>{mess}</h1>
    </>
  )
}
export default Toogle;