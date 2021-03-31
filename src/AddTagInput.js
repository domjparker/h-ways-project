import React, { useState } from 'react';
import './index.css';

function AddTagInput(props) {
  
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([props.studentTags])

  function addToTags() {
    if (!tags.includes(tagInput)) {
      let updatedTags = tags.concat(tagInput);
      setTags(updatedTags);
      console.log("line 13", tags); // remove later
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.submitTagInput(tagInput, props.studentId);
    addToTags(tagInput);
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