import React from 'react';


function SearchInput(props) {
  return (
    <div>
      <div id="search-input-div">
      <input onChange={props.searchNameChange} type="text" id="search-input" placeholder={props.placeholder}></input>
      <hr id="search-input-hr"></hr>
      </div>
    </div>
  )
}

export default SearchInput;