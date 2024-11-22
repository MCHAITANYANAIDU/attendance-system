import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Attendance System</h1>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/mark-attendance">Mark Attendance</a></li>
        <li><a href="/view-attendance">View Attendance</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
