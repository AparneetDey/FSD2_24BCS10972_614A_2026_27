import React from 'react'

const LeaveSection = ({employee, setEmployee}) => {

  return (
    <div>
        <h2>Leave Section</h2>
        {employee ? (
            <div>
                <p>{employee.name}</p>
                <p>{employee.department}</p>
                <p>{employee.leaveBalance}</p>
                <button onClick={() => setEmployee(null)}>Approve</button>
            </div>
        ) : (
            <p>No leave has been applied</p>
        )}
    </div>
  )
}

export default LeaveSection