// context.js
import React, { createContext, useState, useContext } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const value = {
    searchQuery,
    setSearchQuery,
  };
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useBookContext = () => {
  return useContext(BookContext);
};
