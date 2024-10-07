import React from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) return <Navigate to="/login" />;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Quiz Application!</p>
    </div>
  );
};

export default Dashboard;
