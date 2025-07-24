import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/slices/authSlice';
import Header from './Header';
import Footer from './Footer';
const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    employmentId: '',
    phone: '',
  });
  
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-[544px] bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'First Name', name: 'firstname', placeholder: 'Enter first name here' },
              { label: 'Surname', name: 'lastname', placeholder: 'Enter surname here' },
              { label: 'Email', name: 'email', placeholder: 'Enter email here', type: 'email' },
              { label: 'Password', name: 'password', placeholder: 'Enter password here', type: 'password' },
              { label: 'Employment ID', name: 'employmentId', placeholder: 'Enter employment ID here' },
              { label: 'Phone', name: 'phone', placeholder: 'Enter phone number here', type: 'tel' },
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
                  required={name !== 'phone'}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full h-[52px] bg-[#333333] text-white p-3 rounded hover:bg-[#555555] transition-colors duration-300 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterForm;