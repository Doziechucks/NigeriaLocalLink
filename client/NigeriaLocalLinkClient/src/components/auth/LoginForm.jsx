import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/slices/authSlice';
import Header from './Header';  
import Footer from './Footer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header at the top */}
      <Header />
      
      {/* Main content area - grows to fill available space */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-[544px] bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { 
                label: 'Email', 
                name: 'email', 
                placeholder: 'Enter your email', 
                type: 'email' 
              },
              { 
                label: 'Password', 
                name: 'password', 
                placeholder: 'Enter your password', 
                type: 'password' 
              },
            ].map(({ label, name, placeholder, type = 'text' }) => (
              <div key={name} className="flex flex-col">
                <label htmlFor={name} className="text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  className="w-full h-[52px] p-3 border rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-[#333333]"
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="text-right">
              <Link 
                to="/forgot-password" 
                className="text-sm text-[#333333] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-[52px] bg-[#333333] text-white p-3 rounded hover:bg-[#555555] transition-colors duration-300 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link 
                to="/register" 
                className="text-sm text-[#333333] font-medium hover:underline"
              >
                Register here
              </Link>
            </div>
          </form>
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default LoginForm;