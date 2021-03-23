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

  // function filterStudents() {
  // let filteredByName = students.filter(student => {
  //   let fullName = student.firstName + " " + student.lastName;
  //   return fullName.toLowerCase().includes(searchByNameField.toLowerCase());
  // })

  // let filteredByTag = Object.keys(tagData).filter(tagKey => {
  //   return tagKey.toLowerCase().includes(searchByTagField.toLowerCase());
  // })

  // let filteredArrayOfIDsByTag = [];
  // filteredByTag.forEach(tagKey => {
  //   return tagData[tagKey].forEach(id => {
  //     if (!filteredArrayOfIDsByTag.includes(id)) filteredArrayOfIDsByTag.push(id);
  //     return;
  //   })
  // });

  // let finalFilteredList = filteredByName.forEach(student => {
  //   return filteredArrayOfIDsByTag.includes(student.id);
  // }) 

  // console.log(filteredArrayOfIDsByTag)

  // setFilteredStudents(finalFilteredList)
  // }

  let filteredByTag = Object.keys(tagData).filter(tagKey => {
    return tagKey.toLowerCase().includes(searchByTagField.toLowerCase());
  }) // returns array of 

  let arrayOfIDsByTag = [];
  filteredByTag.forEach(tagKey => {
    return tagData[tagKey].forEach(id => {
      if (!arrayOfIDsByTag.includes(id)) arrayOfIDsByTag.push(id);
      return;
    })
  });

  let filteredStudents = students;

  if (searchByNameField !== "" && searchByTagField === "") {
    filteredStudents = students.filter(student => {
      let fullName = student.firstName + " " + student.lastName;
      return fullName.toLowerCase().includes(searchByNameField.toLowerCase());
    })
  }

  if (searchByNameField === "" && searchByTagField !== "") {
    filteredStudents = students.filter(student => {
      return arrayOfIDsByTag.includes(student.id);
    })
  }

  if (searchByNameField !== "" && searchByTagField !== "") {
    let filteredNames = students.filter(student => {
      let fullName = student.firstName + " " + student.lastName;
      return fullName.toLowerCase().includes(searchByNameField.toLowerCase());
    });
    filteredStudents = filteredNames.filter(student => {
      return arrayOfIDsByTag.includes(student.id);
    })
  }

    console.log(arrayOfIDsByTag)


  return (
    <div className="app">
      <ScrollFeature>
        <SearchInput searchInputChange={onSearchNameChange} placeholder={"Search by name"} />
        <SearchInput searchInputChange={onSearchTagChange} placeholder={"Search by tag"} />
        <ListOfStudents onChange={handleTagSubmit} students={filteredStudents} />
      </ScrollFeature>
    </div>
  );
}

export default App;
