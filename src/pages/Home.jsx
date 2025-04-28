import React from 'react'

export const Home = () => {
  return (
    <div className="flex items-center justify-center p-4">
      
      <div className="bg-gray-50 rounded-lg shadow-sm w-full max-w-sm h-[95vh] flex flex-col justify-end p-6 mt-5">
        <div className="mb-8 flex flex-col items-start">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to PopX</h1>
          <p className="text-gray-400 mt-1 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
        <div className="space-y-3 mb-6">
          <button className="w-full bg-[#6c25ff] text-white py-3 rounded-md font-medium" onClick={() => window.location.href = '/register'}>
            Create Account
          </button>
          
          <button className="w-full bg-purple-200 text-gray-700 py-3 rounded-md font-medium" onClick={() => window.location.href = '/login'}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}