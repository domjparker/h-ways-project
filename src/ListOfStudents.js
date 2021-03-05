import React from 'react';
import SingleStudent from './SingleStudent';
import './index.css';

const ListOfStudents = ({students}) => {
  return (
    <>
      <div className="list-of-students-div">
        {
          students.map((student, index) => {
            return (
              <SingleStudent
                key={students[index].id}
                id={students[index].id}
                pic={students[index].pic}
                firstName={students[index].firstName}
                lastName={students[index].lastName}
                email={students[index].email}
                company={students[index].company}
                skill={students[index].skill}
                grades={students[index].grades}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default ListOfStudents;