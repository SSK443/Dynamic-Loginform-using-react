import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Portal() {
  const location = useLocation();
  const { email } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h1 className="md:text-4xl mb-4 font-bold text-center text-2xl">Welcome, {email}</h1>
        <p className="text-center mb-6 ">We're glad to have you here!</p>
        <Link to="/">
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded-lg font-semibold">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Portal;

