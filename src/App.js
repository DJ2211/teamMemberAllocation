import './App.css'
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GroupTeamMembers from './GroupTeamMembers';
import Nav from './nav';
import NotFound from './NotFound';


export default function App() {


  const [selectedTeam, setTeam] = React.useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  const [employees, setemployees] = React.useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    }])

  React.useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees))
  }, [employees])

  React.useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  function handleTeam(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((emp) => emp.id === parseInt(event.currentTarget.id) ? (emp.teamName === selectedTeam) ? { ...emp, teamName: '' } : { ...emp, teamName: selectedTeam } : emp);



    setemployees(transformedEmployees);
  }


  return (
    <Router>
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((emp) => emp.teamName === selectedTeam).length} />
      <Nav />
      <Routes>
        <Route path='/' element={<Employees employees={employees}
          selectedTeam={selectedTeam}
          handleEmployeeCardClick={handleEmployeeCardClick}
          handleTeam={handleTeam}

        />}></Route>

        <Route path='/GroupTeamMembers' element={<GroupTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}
