import React, { useState, useEffect } from 'react';
import './index.css';
import ListOfStudents from './ListOfStudents';
import ScrollFeature from './ScrollFeature';
import SearchInput from './SearchInput';

function App() {
  const [students, setStudents] = useState([]);
  const [searchByNameField, setSearchByNameField] = useState(""); 
  const [searchByTagField, setSearchByTagField] = useState(""); 
  const [tagData, setTagData] = useState({});

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => setStudents(data.students))
      .catch(console.error)
  }, []);

  // function onSearchNameChange(e) {
  //   setSearchByNameField(e.target.value);
  // }

  function handleTagSubmit(submittedTag, studentId) {
    let currentTagData = tagData;
    // if (Object.keys(currentTagData).length === 0)
    if (!currentTagData[submittedTag]) currentTagData[submittedTag] = [studentId];
    else if (!currentTagData[submittedTag].includes(studentId)) {
      currentTagData[submittedTag].push(studentId);
    }
    // else if (currentTagData[submittedTag].includes(studentId)) return;
    console.log(currentTagData)
    // } else currentTagData[studentId].concat(submittedTag);
    // console.log(currentTagData);
    setTagData(currentTagData);
    // if (!tagData[studentID].includes(indivStudentTagInput)) {
    //   tagListWithUpdate = tagData[studentID].concat(indivStudentTagInput);
    // }
    // setTagData(updatedData);
    //
    // let dummyData = {studentId: [submittedTag]}
    // setTagData();
      // setTagData(...tagData, tagData[studentID] = [...tagData[studentID], indivStudentTagArr])
    
  }

  const STUDENTS_FILTERED = students.filter(student => {
    let fullName = student.firstName + " " + student.lastName;
    return fullName.toLowerCase().includes(searchByNameField.toLowerCase());
  })


  return (
    <div className="app">
      <ScrollFeature>
        <SearchInput searchInputChange={(e) => setSearchByNameField(e.target.value)} placeholder={"Search by name"}/>
        <SearchInput searchInputChange={(e) => setSearchByTagField(e.target.value)} placeholder={"Search by tag"}/>
        <ListOfStudents onChange={handleTagSubmit} students={STUDENTS_FILTERED} />
      </ScrollFeature>
    </div>
  );
}

export default App;
