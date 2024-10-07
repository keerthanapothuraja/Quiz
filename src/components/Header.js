// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-quiz">Create Quiz</Link>
      </nav>
    </header>
  );
};

export default Header;
