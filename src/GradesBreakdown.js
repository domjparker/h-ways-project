import React from 'react';


const GradesBreakdown = (props) => {



  return (
    <div>
    <p className="grades-p">Test 1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[0]}%</p>
    <p className="grades-p">Test 2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[1]}%</p>
    <p className="grades-p">Test 3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[2]}%</p>
    <p className="grades-p">Test 4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[3]}%</p>
    <p className="grades-p">Test 5: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[4]}%</p>
    <p className="grades-p">Test 6: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[5]}%</p>
    <p className="grades-p">Test 7: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[6]}%</p>
    <p className="grades-p">Test 8: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.grades[7]}%</p>
    </div>
  )
};

export default GradesBreakdown;