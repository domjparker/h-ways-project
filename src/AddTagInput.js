import React from 'react';
import './index.css';

function AddTagInput(props) {
  // const [] = useState('')

  return (
    <div>
    <h1>{props.tagReturn}</h1>
      <form>
        <input id="add-tag-input" type="text" onSubmit={(e) => props.tagInputValue(e)} placeholder="Add a tag"></input>
      </form>
    </div>
  );
}

export default AddTagInput;