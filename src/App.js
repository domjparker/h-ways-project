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
  // const [filteredStudents, setFilteredStudents] = useState(students)

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => setStudents(data.students))
      .catch(console.error)
  }, []);

  function onSearchNameChange(e) {
    setSearchByNameField(e.target.value);
  }

  function onSearchTagChange(e) {
    setSearchByTagField(e.target.value);
  }

  function handleTagSubmit(submittedTag, studentId) {
    let currentTagData = tagData;
    // if (Object.keys(currentTagData).length === 0)
    if (!currentTagData[studentId]) currentTagData[studentId] = [submittedTag];
    else if (!currentTagData[studentId].includes(submittedTag)) {
      currentTagData[studentId].push(submittedTag);
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
  console.log("tagData", tagData)

  function filterNames() {
    return students.filter(student => {
      let fullName = student.firstName + " " + student.lastName;
      return fullName.toLowerCase().includes(searchByNameField.toLowerCase());
    });
  }

  let filteredIDsByTagSearch = Object.keys(tagData).filter(idKey => {
    let studentTagArr = tagData[idKey];
    console.log("studentTagArr", studentTagArr)
    if (studentTagArr.some(tag => tag.includes(searchByTagField))) {
      return idKey;
    }
    return false;
  }) 

  // console.log("filteredIDsByTag", filteredIDsByTagSearch)

  let filteredStudents = students;

  if (searchByNameField !== "" && searchByTagField === "") {
    filteredStudents = filterNames();
  }

  if (searchByNameField === "" && searchByTagField !== "") {
    filteredStudents = students.filter(student => {
      return filteredIDsByTagSearch.includes(student.id);
    })
  }

  if (searchByNameField !== "" && searchByTagField !== "") {
    let filteredNames = filterNames();
    filteredStudents = filteredNames.filter(student => {
      return filteredIDsByTagSearch.includes(student.id);
    })
  }


  return (
    <div className="app">
      <ScrollFeature>
        <SearchInput searchInputChange={onSearchNameChange} placeholder={"Search by name"} />
        <SearchInput searchInputChange={onSearchTagChange} placeholder={"Search by tag"} />
        <ListOfStudents onChange={handleTagSubmit} students={filteredStudents} tagData={tagData}/>
      </ScrollFeature>
    </div>
  );
}

export default App;
