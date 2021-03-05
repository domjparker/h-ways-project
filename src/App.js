import React, { useState, useEffect } from 'react';
import './index.css';
import ListOfStudents from './ListOfStudents';
import ScrollFeature from './ScrollFeature';
import SearchByName from './SearchByName';

function App() {
  const [students, setStudents] = useState([]);
  const [searchByNameField, setSearchByNameField] = useState("")

  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => setStudents(data.students))
      .catch(console.error)
  }, []);

  function onSearchNameChange(e) {
    setSearchByNameField(e.target.value);
  }

  const NAMES_FILTERED = students.filter(student => {
    let fullName = student.firstName + " " + student.lastName;
    return fullName.toLowerCase().includes(searchByNameField.toLowerCase());
  })


  return (
    <div className="app">
      <ScrollFeature>
        <SearchByName searchNameChange={onSearchNameChange}/>
        <ListOfStudents students={NAMES_FILTERED} />
      </ScrollFeature>
    </div>
  );
}

export default App;
