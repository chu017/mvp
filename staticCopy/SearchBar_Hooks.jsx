import React from 'react';
import { useState } from 'react';

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const { recipes } = props;
  let searchedItems = [];

  return (
    <div className="search-bar">
      <input type="text"
      placeholder="search..."
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
      />

        {recipes.filter((val) => {
          if (searchTerm === '') {
            return val
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchedItems.push(val);
            return val
          }
        }).map((item, i) => {
          return (
            <div className="search-item" key={i}>
              <p>{item.name}</p>
            </div>
          )

        })}

     {/* <button className="search-button">
       <span>search</span>
     </button> */}

  </div>
  )
}

export default Search;
