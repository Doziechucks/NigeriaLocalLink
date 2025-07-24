import React, { useState } from 'react';  
import AuthButton from '../../components/auth/AuthButton';
import logoImage from '../../assets/images/locallink_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F2F0EF] shadow-md h-[114px] flex items-center">
      <div className="max-w-[1200px] w-full mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img 
            src={logoImage} 
            alt="Company Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="font-medium hover:text-gray-700">HOME</a>
          <a href="#" className="font-medium hover:text-gray-700">ABOUT US</a>
          <a href="#" className="font-medium hover:text-gray-700">CONTACT US</a>
          <a href="#" className="font-medium hover:text-gray-700">SERVICES</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <AuthButton variant="register" className="min-w-[100px]" />
          <AuthButton variant="login" className="min-w-[100px]" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[114px] left-0 w-full bg-[#F2F0EF] shadow-md p-4 space-y-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="font-medium hover:text-gray-700">HOME</a>
            <a href="#" className="font-medium hover:text-gray-700">ABOUT US</a>
            <a href="#" className="font-medium hover:text-gray-700">CONTACT US</a>
            <a href="#" className="font-medium hover:text-gray-700">SERVICES</a>
            <AuthButton variant="register" className="w-full" />
            <AuthButton variant="login" className="w-full" />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
