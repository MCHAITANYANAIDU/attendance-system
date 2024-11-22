import React, { useState } from 'react';
import './MarkAttendance.css';

const MarkAttendance = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [status, setStatus] = useState('Present');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Attendance Marked!\nID: ${employeeId}\nName: ${employeeName}\nStatus: ${status}`
    );
    setEmployeeId('');
    setEmployeeName('');
    setStatus('Present');
  };

  return (
    <div className="mark-attendance">
      <h1>Mark Attendance</h1>
      <form className="attendance-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter Employee ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter Employee Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Mark Attendance
        </button>
      </form>
    </div>
  );
};

export default MarkAttendance;
