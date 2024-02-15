import {useState} from 'react';
function DataBinding()
{
    const[inputValue,setInputValue]=useState('');
    const handle=(event)=>{setInputValue(event.target.value)};
    return(
        <>
        <label>Enter a Value : </label>
        <input type="text" value={inputValue} onChange={handle} />
        <h2>Data:{inputValue}</h2>
        </>
        );   
}
export default DataBinding;