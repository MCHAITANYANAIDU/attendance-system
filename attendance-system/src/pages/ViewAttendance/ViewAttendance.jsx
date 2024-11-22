
         
import React, { useState } from 'react';
import './ViewAttendance.css';

const ViewAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: 'John Doe', date: '2024-11-22', status: 'Present' },
    { id: 2, name: 'Jane Smith', date: '2024-11-22', status: 'Absent' },
    { id: 3, name: 'Michael Johnson', date: '2024-11-22', status: 'Present' },
  ]);

  return (
    <div className="view-attendance">
      <h1>Attendance Records</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td className={record.status === 'Present' ? 'status-present' : 'status-absent'}>
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
