import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Dashboard from './components/Dashboard'

const App = () => {
  const [employees, setEmployees] = useState(
    [
      {
        name: "Rahul",
        department: "Engineering",
        leaveBalance: 10,
      },
      {
        name: "Ajay",
        department: "Engineering",
        leaveBalance: 2,
      },
      {
        name: "Raj",
        department: "Engineering",
        leaveBalance: 3,
      },
    ]
  );
  const [leaveRequest, setLeaveRequest] = useState(null);


  const onApplyLeave = (ind) => {
    setLeaveRequest(employees[ind]);
  }
  
  return (
    <main>
      <div>
        <h2>Employees</h2>
        {employees.map((emp, ind) => (
          <div key={ind}>
            <p>{emp.name}</p>
            <p>{emp.department}</p>
            <p>{emp.leaveBalance}</p>
            <button onClick={() => onApplyLeave(ind)}>Apply Leave</button>
          </div>
        ))}
      </div>

      <Dashboard employee={leaveRequest} setEmployee={setLeaveRequest} />
    </main>
  )
}

export default App