import React, { useState } from 'react';
import './index.css';

function AddTagInput(props) {
  
  const [tagInput, setTagInput] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    props.submitTagInput(tagInput, props.studentId);
    setTagInput("");
  }

  function handleInputChange(e) {
    e.preventDefault();
    setTagInput(e.target.value)
  }


  return (
    <div>
    <h5>{props.studentId}</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="add-tag-input" type="text" value={props.tagInputValue} placeholder="Add a tag" onChange={handleInputChange}></input>
      </form>
    </div>
  );
}

export default AddTagInput;