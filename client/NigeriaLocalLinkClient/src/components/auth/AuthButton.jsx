import React from 'react';
import { Link } from 'react-router-dom'; 

const AuthButton = ({ 
  variant = 'register',
  className = '',
  disabled = false,
  showLink = false // New prop to toggle link visibility
}) => {
  const baseStyles = "px-6 py-2 rounded-md font-medium transition-all duration-200";
  
  const variants = {
    register: "bg-[#EBD1AE] text-gray-800 border border-gray-300 hover:bg-gray-50",
    login: "bg-gray-800 text-white hover:bg-gray-700"
  };

  const buttonText = variant === 'register' ? 'Register' : 'Login';
  const linkPath = variant === 'register' ? '/register' : '/login';
  const linkText = variant === 'register' ? 'Create account' : 'Already have an account?';

  return (
    <div className="flex flex-col items-center space-y-1">
      <Link 
        to={linkPath}
        className={`${baseStyles} ${variants[variant]} ${className} text-center w-full`}
      >
        {buttonText}
      </Link>
      
      {showLink && (
        <Link 
          to={linkPath} 
          className="text-xs text-gray-500 hover:text-gray-700 hover:underline"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default AuthButton;