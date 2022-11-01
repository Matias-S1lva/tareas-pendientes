import React, { useState } from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export { TodoSearch };
