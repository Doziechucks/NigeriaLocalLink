import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegisterForm from './components/auth/RegisterForm';
import OfficerDashboard from './pages/OfficerDashboard';
import LoginForm from './components/auth/LoginForm';
import RoleRedirect from './pages/RoleRedirect';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page Works</h1>} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/redirect" element={<RoleRedirect />} />
      <Route path="/login" element={<LoginForm />} />
      <Route 
        path="/officer-dashboard" 
        element={
          <RequireAuth>
            <OfficerDashboard />
          </RequireAuth>
        } 
      />
    </Routes>
  );
};

const RequireAuth = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? children : <Navigate to="/login" replace />;
};

export default App;