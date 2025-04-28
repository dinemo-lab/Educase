import React from 'react';

export default function Register() {

    
  const handleCreateAccount = (e) => {
    e.preventDefault(); 
    window.location.href = '/profile'; 
  }




  return (
    <div className="flex items-center justify-center p-4">
     
      <div className="bg-gray-50 rounded-lg shadow-sm w-full max-w-sm h-[95vh] flex flex-col p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create your<br />PopX account</h1>
        </div>
        
        <form className="flex flex-col flex-grow">
          <div className="space-y-6 flex-grow">
            <div className="relative mb-6">
              <label 
                htmlFor="fullName" 
                className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-[#6c25ff]"
              >
                Full Name
                <span className='text-red-500 text-xs'>*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Marry Doe"
                className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-700 text-sm font-semibold"
              />
            </div>
            
            <div className="relative mb-6">
              <label 
                htmlFor="phone" 
                className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-[#6c25ff]"
              >
                Phone number
                <span className='text-red-500 text-xs'>*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Marry Doe"
                className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-700 text-sm font-semibold"
              />
            </div>
            
            <div className="relative mb-6">
              <label 
                htmlFor="email" 
                className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-[#6c25ff]"
              >
                Email address
                <span className='text-red-500 text-xs'>*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Marry Doe"
                className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-700 text-sm font-semibold"
              />
            </div>
            
            <div className="relative mb-6">
              <label 
                htmlFor="password" 
                className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-[#6c25ff]"
              >
                Password
                <span className='text-red-500 text-xs'>*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Marry Doe"
                className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-700 text-sm font-semibold"
              />
            </div>
            
            <div className="relative mb-6">
              <label 
                htmlFor="company" 
                className="absolute -top-2 left-3 bg-gray-50 px-1 text-xs font-semibold text-[#6c25ff]"
              >
                Company name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Marry Doe"
                className="w-full px-3 pt-4 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-700 text-sm font-semibold"
              />
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-medium text-grey-600 mb-2">Are you an Agency?*</p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="agency" 
                      value="yes" 
                      defaultChecked
                      className="opacity-0 absolute h-5 w-5"
                    />
                    <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-[#6c25ff]"></div>
                    </div>
                  </div>
                  <span className="ml-2 text-sm">Yes</span>
                </label>
                
                <label className="flex items-center">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="agency" 
                      value="no"
                      className="opacity-0 absolute h-5 w-5" 
                    />
                    <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <span className="ml-2 text-sm">No</span>
                </label>
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#6c25ff] text-white py-3 rounded-md font-medium mt-auto"
            onClick={handleCreateAccount} 
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}