import React, { useState, useEffect } from 'react';
import './index.css';
import ListOfStudents from './ListOfStudents';
import ScrollFeature from './ScrollFeature';
import SearchInput from './SearchInput';

function App() {
  const [students, setStudents] = useState([]);
  const [searchByNameField, setSearchByNameField] = useState("");
  const [tagValue, setTagValue] = useState("")

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => setStudents(data.students))
      .catch(console.error)
  }, []);

  function onSearchNameChange(e) {
    setSearchByNameField(e.target.value);
  }

  function onTagInputSubmit(e) {
    setTagValue(e.target.value);
  }

  const NAMES_FILTERED = students.filter(student => {
    let fullName = student.firstName + " " + student.lastName;
    return fullName.toLowerCase().includes(searchByNameField.toLowerCase());
  })


  return (
    <div className="app">
      <ScrollFeature>
        <SearchInput searchNameChange={onSearchNameChange} placeholder={"Search by name"}/>
        <SearchInput placeholder={"Search by tag"}/>
        <ListOfStudents tagInputValue={onTagInputSubmit} tagReturn={tagValue} students={NAMES_FILTERED} />
      </ScrollFeature>
    </div>
  );
}

export default App;
