import React from 'react'
import LeaveSection from './LeaveSection'

const EmployeeSection = ({employee, setEmployee}) => {
  return (
    <LeaveSection employee={employee} setEmployee={setEmployee} />
  )
}

export default EmployeeSection