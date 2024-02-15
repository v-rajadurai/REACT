import React, { useState } from 'react'

const ErrorBoundary = ({ children }) => 
{
  const [error, setError] = useState(null)
  const handleError = (error) => {
    setError(error)
  }

  if (error) 
  {
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error && error.toString()}</p>
      </div>
    )
  }

  return React.cloneElement(children, { handleError })
}

const ExampleComponent = ({ handleError }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    try {
      setValue(event.target.value)

      if (event.target.value === 'error') {
       
        throw new Error('Error: Input value is "error"')
      }
    } catch (error) {
      
      handleError(error)
    }
  }

  return (
    <div>
      <h1>Example Component</h1>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

const Boundary = () => {
  return (
    <ErrorBoundary>
      <ExampleComponent />
    </ErrorBoundary>
  )
}

export default Boundary;