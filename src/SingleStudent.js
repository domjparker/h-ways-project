import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import GradesBreakdown from './GradesBreakdown';
import AddTagInput from './AddTagInput';

const SingleStudent = (props) => {

  const [showGrades, setShowGrades] = useState('hide');
  const [toggleGradesBtn, setToggleGradesBtn] = useState(faPlus);
  // const [indivTagList, setIndivTagList] = useState([]);

  useEffect(() => {
    if (props.OnChange) {
      props.onChange(e => props.id())
    }
  })

  function getGradeAverage() {
    let average = 0;
    props.grades.forEach(grade => {
      average += Number(grade);
    });
    return (average / props.grades.length).toString();
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

  // function handleSubmitTag(e) {
  //   if (!indivTagList.includes(tagInputValue)) {
  //     let currentTagsListPlusNew = indivTagList.concat(tagInputValue);
  //     setIndivTagList(currentTagsListPlusNew);
  //   }
  //   setTagInputValue('');
  // }

  // function handleSubmitTag() {
  //   // if (!props.tagData[props.id].includes(tagInputValue)) {
  //   //   let currentIndivTagsListPlusNew = props.tagData[props.id].concat(tagInputValue);
  //     return props.tagDataOnSubmit(props.id, tagInputValue);
  //   // }
  // } 

  return (
    <div className="single-student-div">
      <div className="image-div">
        <img src={props.pic} alt={`${props.firstName} ${props.lastName}`} />
      </div>
      <div className="info-div">
        <h1 className="student-name">{props.firstName} {props.lastName}</h1>
        <p className="info-p">Email: {props.email}</p>
        <p className="info-p">Company: {props.company}</p>
        <p className="info-p">Skill: {props.skill}</p>
        <p className="info-p">Average: {getGradeAverage()}%</p>
      </div>
      <div id="grades-button-div">
        <FontAwesomeIcon onClick={handleGradesDisplay} id="plus-button" icon={toggleGradesBtn} />
      </div>
      {
        showGrades === 'show' ? <div id="grades-breakdown-div" ><GradesBreakdown grades={props.grades} /></div> : null
      }
      <div id="add-tag-input-div">
        <AddTagInput submitTagInput={props.onChange} studentId={props.id} studentTags={props.studentTagData}/>
      </div>
    </div>
  )
}

export default SingleStudent;