import React from 'react';
import './index.css';

const ScrollFeature = (props) => {
  return (
    <div className="scroll-feature-div">
      {props.children}
    </div>
  )
}

export default ScrollFeature;