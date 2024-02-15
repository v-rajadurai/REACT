import { createContext } from "react";
const ThemeContext = createContext();
export default ThemeContext;
import React from 'react';

const MyComponent = () => {
  const numberList = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Number List</h1>
      <ul>
        {numberList.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};