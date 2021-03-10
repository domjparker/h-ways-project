import React from 'react';
import './index.css';

function AddTagInput(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.submitTagInput(props.tagInputValue);
  }

  return (
    <div>
    <h5>{props.indivTagList}</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="add-tag-input" type="text" value={props.tagInputValue} placeholder="Add a tag" onChange={props.getTagInput}></input>
      </form>
    </div>
  );
}

export default AddTagInput;


// onSubmit={(e) => props.tagInputValue(e)}