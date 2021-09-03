import React from 'react';

import './search-box.styles.css';

/* 
Functional components, unlike class components, such as App.js component
don't have access to state because they don't have access to constructor which is a
class method on our Component that we imported from React that we extend our class from,
they also don't have access to lifecycle methods because we don't always need to use them 

A functional component is a one that takes some props and returns some HTML

So if you don't need access to state or lifecycle methods 
, just use functional components [because it's easier to test and read],
otherwise, use class components
*/

export const SearchBox = ({placeholder, handleChange}) => (
    <input  type='search' 
            className="search" 
            placeholder={placeholder} 
            onChange={handleChange} 
  />
)

/* e =>
        this.setState(
          {searchField: e.target.value}
        ) */