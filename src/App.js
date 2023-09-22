import React from 'react';
import Main from './components/main.js';
import NavBar from './components/navbar.js';
import Profile from './users/profile.js';
import Register from './users/register.js';
import Login from './users/login.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
