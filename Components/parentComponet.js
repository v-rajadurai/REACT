import React from 'react';
import Child from './childCompont';
export const myContext=React.createContext()
export default function Parent()
{
    return(
        <>
        <myContext.Provider value="Hello">
            <Child/>
        </myContext.Provider>
        </>
    )
}