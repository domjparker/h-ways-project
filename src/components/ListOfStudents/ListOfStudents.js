import React from 'react';
import SingleStudent from '../SingleStudent/SingleStudent';
import './listOfStudents.css';

const ListOfStudents = (props) => {
  return (
    <>
      <div className="list-of-students-div">
        {
          props.students.map(student => {
            return (
              <SingleStudent
                key={student.id}
                id={student.id}
                pic={student.pic}
                firstName={student.firstName}
                lastName={student.lastName}
                email={student.email}
                company={student.company}
                skill={student.skill}
                grades={student.grades}
                tagInputValue={props.tagInputValue}
                onChange={props.onChange}
                studentTagData={props.tagData[student.id]}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default ListOfStudents;