import React from 'react';
import './AttendanceTable.css';

const AttendanceTable = ({ records }) => {
  return (
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
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.date}</td>
            <td>{record.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
