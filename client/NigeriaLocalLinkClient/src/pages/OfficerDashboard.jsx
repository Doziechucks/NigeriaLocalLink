import React from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/auth/Footer';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'; // Added for redirect

const OfficerDashboard = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl font-medium">Loading dashboard...</div>
      </div>
    );
  }

  // Redirect if no authenticated user
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">
          Welcome Officer {user.firstName}
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <button className="p-4 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
            Create Record
          </button>
          <button className="p-4 bg-green-600 text-white rounded shadow hover:bg-green-700">
            See Users
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficerDashboard;