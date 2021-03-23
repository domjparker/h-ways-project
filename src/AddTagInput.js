import React, { useState } from 'react';
import './index.css';

function AddTagInput(props) {
  
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([])

  function addToTags() {
    tags.push(tagInput);
    console.log(tags)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.submitTagInput(tagInput, props.studentId);
    addToTags();
    setTagInput("");
  }

  function handleInputChange(e) {
    e.preventDefault();
    setTagInput(e.target.value)
  }


  return (
    <div>
    <h5>{tags}</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="add-tag-input" type="text" value={tagInput} placeholder="Add a tag" onChange={handleInputChange}></input>
      </form>
    </div>
  );
}

export default AddTagInput;