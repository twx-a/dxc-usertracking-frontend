import React from 'react';
import Main from './components/main.js';
import NavBar from './components/navbar.js';
import Dashboard from './components/dashboard.js';
import Register from './users/register.js';
import Login from './users/login.js';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
