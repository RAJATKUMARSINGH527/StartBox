import React, { useState } from 'react';

export default function StartBoxLogin() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempt with email: ${email}`);
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    alert('Google sign in clicked');
  };

  const handleXSignIn = (e) => {
    e.preventDefault();
    alert('X.com sign in clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-xl font-bold text-gray-900 mb-16">StartBox</div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900 mb-6 pl-3 border-l-4 border-indigo-500">
            Sign up or log in to StartBox
          </h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder='investor@fund.com'
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-auto bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            You can also sign in with{' '}
            <a 
              href="#" 
              onClick={handleGoogleSignIn}
              className="text-indigo-600 font-medium hover:underline"
            >
              Google
            </a>{' '}
            or{' '}
            <a 
              href="#" 
              onClick={handleXSignIn}
              className="text-indigo-600 font-medium hover:underline"
            >
              X.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}