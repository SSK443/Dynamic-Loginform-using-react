import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/form.module.css';

function Form() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const validEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validPass = (pass) => {
    return pass.length >= 6;
  };

  const login = () => {
    if (!email || !pass) {
      alert('Please fill the form');
      return;
    }
    if (!validEmail(email)) {
      alert('Email not valid');
      return;
    }
    if (!validPass(pass)) {
      alert('Password must be at least 6 characters long');
      return;
    }
    navigate('/Portal', { state: { email: email } });
  };

  const reset = () => {
    setPass('');
    setEmail('');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="bg-white text-gray-800 p-10 rounded-lg shadow-lg w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">SSK GROUP COMPANY</h1>
          <h2 className="text-xl text-center mb-4 text-purple-700">Login Form</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="flex justify-between items-center gap-4 mt-4">
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition duration-300"
              onClick={login}
            >
              Login
            </button>
            <button
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md font-semibold transition duration-300"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
