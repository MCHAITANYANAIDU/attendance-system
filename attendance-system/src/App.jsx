// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Dashboard from './components/Dashboard';
import MarkAttendance from './components/MarkAttendance';
import ViewAttendance from './components/ViewAttendance';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mark-attendance" element={<MarkAttendance />} />
            <Route path="/view-attendance" element={<ViewAttendance />} />
          </Routes>
        </div>ini
      </Router>
    </Provider>
  );
};

export default App;
