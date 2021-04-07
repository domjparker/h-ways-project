import React, { useState } from 'react';
import './addTagInput.css';

function AddTagInput(props) {
  const [tagInput, setTagInput] = useState('');

  let tagsArray = props.tagData[props.studentId];
  if (tagsArray === undefined) tagsArray = [];

  function handleSubmit(e) {
    e.preventDefault();
    if (tagInput !== "") {
      props.submitTagInput(tagInput, props.studentId);
    setTagInput("");
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    setTagInput(e.target.value)
  }

  return (
    <div>
      <div className="list-of-tags-div">
        {
          tagsArray.map((tag, idx) => {
            return (
              <div className="individual-tag-div" key={idx}>
                {tag}
              </div>
            )
          })
        }
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="add-tag-input" type="text" value={tagInput} placeholder="Add a tag" onChange={handleInputChange}></input>
      </form>
    </div>
  );
}

export default AddTagInput;