import React from 'react';


function SearchInput(props) {
  return (
    <div>
      <div className="search-input-div">
      <input onChange={props.searchInputChange} type="text" className="search-input" placeholder={props.placeholder}></input>
      <hr className="search-input-hr"></hr>
      </div>
    </div>
  )
}

export default SearchInput;