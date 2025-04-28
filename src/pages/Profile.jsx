import React from 'react';

export default function AccountSettings() {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto h-[95vh] bg-gray-50 shadow-sm">
     
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-lg font-medium text-gray-700">Account Settings</h1>
      </div>
      
    
      <div className="p-4 flex items-center space-x-4 border-b border-gray-200">
       
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <img 
              src="/Ellipse 114@2x.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-[#6c25ff] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            <img src='/Group 1585@2x.png' alt="Edit" className="w-3 h-3" />
          </div>
        </div>
        
      
        <div>
          <p className="font-medium text-gray-800">Marry Doe</p>
          <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>
     
      <div className="p-4 border-b border-dashed border-gray-200">
        <p className="text-gray-700 font-medium text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      
     
      <div className="flex-grow border-b border-dashed border-gray-200"></div>
      
     
      <div className="flex-grow border-b border-dashed border-gray-200"></div>
    </div>
  );
}