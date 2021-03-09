import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import GradesBreakdown from './GradesBreakdown';

const SingleStudent = ({ grades, pic, firstName, lastName, email, company, skill }) => {

  const [showGrades, setShowGrades] = useState('hide');
  const [toggleGradesBtn, setToggleGradesBtn] = useState(faPlus)

  function getGradeAverage() {
    let average = 0;
    grades.forEach(grade => {
      average += Number(grade);
    });
    return (average / grades.length).toString();
  }

  function handleGradesDisplay() {
    if (showGrades === "show") {
      setShowGrades("hide");
      setToggleGradesBtn(faPlus)
    }
    else {
      setShowGrades("show");
      setToggleGradesBtn(faMinus)
    }
  }

  return (
    <div className="single-student-div">
      <div className="image-div">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="info-div">
        <h1 className="student-name">{firstName} {lastName}</h1>
        <p className="info-p">Email: {email}</p>
        <p className="info-p">Company: {company}</p>
        <p className="info-p">Skill: {skill}</p>
        <p className="info-p">Average: {getGradeAverage()}%</p>
      </div>
      <div id="grades-button-div">
        <FontAwesomeIcon onClick={handleGradesDisplay} id="plus-button" icon={toggleGradesBtn} />
      </div>
      {
        showGrades === 'show' ? <div id="grades-breakdown-div" ><GradesBreakdown grades={grades} /></div> : null
      }
    </div>
  )
}

export default SingleStudent;