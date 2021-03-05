import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SingleStudent = ({ grades, pic, firstName, lastName, email, company, skill }) => {

  function getGradeAverage() {
    let average = 0;
    grades.forEach(grade => {
      average += Number(grade);
    });
    return (average / grades.length).toString();
  }


  return (
    <div className="single-student-div">
        <div className="image-div">
          <img src={pic} alt={`${firstName} ${lastName}`} />
        </div>
        <div className="info-div">
          <h1 className="student-name">{firstName} {lastName}</h1>
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {getGradeAverage()}%</p>
        </div>
        <div id="grades-button-div">
          <FontAwesomeIcon id="plus-button" icon={faPlus} />
        </div>
    </div>
  )
}

export default SingleStudent;