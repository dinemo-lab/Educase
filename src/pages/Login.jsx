import React from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/profile'); 
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-gray-50 rounded-lg shadow-sm w-full max-w-sm h-[95vh] flex flex-col p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Signin to your<br />PopX account
          </h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}> {/* ✅ add onSubmit here */}
          <div className="relative mb-6">
            <label 
              htmlFor="email" 
              className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-purple-600"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 text-sm"
            />
          </div>

          <div className="relative mb-6">
            <label 
              htmlFor="password" 
              className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-purple-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 text-sm"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gray-400 text-white py-3 rounded-md font-medium mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
