import React from 'react'
import EmployeeSection from './EmployeeSection'

const Dashboard = ({employee, setEmployee}) => {
  return (
    <EmployeeSection employee={employee} setEmployee={setEmployee}/>
  )
}

export default Dashboard