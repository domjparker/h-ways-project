import React from 'react';
import './index.css';

const ListOfTags = (props) => {
  return (
    <>
      <div></div>
      <div className="list-of-tags-div">
        {
          props.tagsList.map((tag, idx) => {
            return (
              <div className="individual-tag-div" key={idx}>
                {tag}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ListOfTags;