import React from 'react';


function SearchByName(props) {
  return (
    <div>
      <div id="search-by-name-div">
      <input onChange={props.searchNameChange} type="text" id="search-by-name-input" placeholder="Search by name"></input>
      <hr id="search-by-name-hr"></hr>
      </div>
    </div>
  )
}

export default SearchByName;