import React, { useState, useEffect } from 'react';
import './App.css';
import ListOfStudents from './components/ListOfStudents/ListOfStudents';
import ScrollFeature from './components/ScrollFeature/ScrollFeature';
import SearchInput from './components/SearchInput/SearchInput';

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

  function onSearchNameChange(e) {
    setSearchByNameField(e.target.value);
  }

  function onSearchTagChange(e) {
    setSearchByTagField(e.target.value);
  }

  function handleTagSubmit(submittedTag, studentId) {
    let currentTagData = tagData;
    if (!currentTagData[studentId]) currentTagData[studentId] = [submittedTag];
    else if (!currentTagData[studentId].includes(submittedTag)) {
      currentTagData[studentId].push(submittedTag);
    }

    setTagData(currentTagData);
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
