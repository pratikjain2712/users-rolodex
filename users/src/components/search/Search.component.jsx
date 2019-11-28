import React from 'react';
import './Search.style.css'

export const Search = ({ placeholder, handleChange }) => <input type="search" placeholder={placeholder} onChange={handleChange} />;
