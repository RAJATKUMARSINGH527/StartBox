import React, { useState, useEffect } from 'react';



export default function StartBoxLogin() {
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  
  // UI state management
  const [showVerification, setShowVerification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCodeEntry, setShowCodeEntry] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Form validation states
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [codeError, setCodeError] = useState('');
  
  // Loading states for buttons
  const [isLoading, setIsLoading] = useState(false);

  // Reset form errors when switching views
  useEffect(() => {
    setEmailError('');
    setPasswordError('');
    setCodeError('');
  }, [showVerification, showPassword, showCodeEntry]);

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!re.test(email)) return 'Please enter a valid email address';
    return '';
  };

  // Handle initial form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate email
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowVerification(true);
    }, 800);
  };

  // Handle password form submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 800);
  };

  // Handle verification code submission
  const handleVerifyCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fullCode = code.join('');
    
    if (fullCode.length !== 6) {
      setCodeError('Please enter all 6 digits');
      setIsLoading(false);
      return;
    }
    
    // Simulate API call for code verification
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 800);
  };

  const handleEnterCodeManually = () => {
    setShowVerification(false);
    setShowPassword(false);
    setShowCodeEntry(true);
  };

  const handleSignInWithPassword = () => {
    setShowVerification(false);
    setShowPassword(true);
    setShowCodeEntry(false);
  };

  const handleBackClick = () => {
    if (showCodeEntry) {
      setShowCodeEntry(false);
      setShowVerification(true);
    } else if (showPassword) {
      setShowPassword(false);
      setShowVerification(true);
    } else {
      setShowVerification(false);
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 800);
  };

  const handleXSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 800);
  };

  const handleCodeChange = (index, value) => {
    // Only allow numbers
    if (value !== '' && !/^\d+$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setCodeError('');
    
    // Auto-focus next input if we entered a digit
    if (value !== '' && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleCodeKeyDown = (index, e) => {
    // If backspace is pressed on an empty input, focus the previous input
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
        // Optional: Clear the previous input as well
        const newCode = [...code];
        newCode[index - 1] = '';
        setCode(newCode);
      }
    }
  };

  const handleResendCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Show a toast or notification that code was resent
      alert('A new verification code has been sent to your email');
    }, 800);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset to verification flow
      setShowPassword(false);
      setShowVerification(true);
      alert('Password reset instructions have been sent to your email');
    }, 800);
  };

  const handleLogoClick = () => {
    // Redirect to home if logged in, otherwise reset flow
    if (isLoggedIn) {
      alert('Redirecting to home page (logged in state)');
      window.location.href = '/';  // Add actual redirection to home page
    } else {
      // Reset everything to initial state
      setShowVerification(false);
      setShowPassword(false);
      setShowCodeEntry(false);
      setIsLoggedIn(false);
      alert('Redirecting to home page');
      window.location.href = '/';  // Add actual redirection to home page
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setCode(['', '', '', '', '', '']);
    setShowVerification(false);
    setShowPassword(false);
    setShowCodeEntry(false);
  };

  // Dashboard screen when logged in
  const renderDashboard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Welcome to StartBox
      </h1>
      
      <p className="text-gray-600 mb-6">
        You are logged in as <span className="font-medium">{email}</span>
      </p>
      
      <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-lg mb-6">
        <p className="text-sm text-indigo-700">
          Your account is fully set up and ready to use. You can now explore all features of StartBox.
        </p>
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={() => alert('Dashboard clicked')}
          className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Go to Dashboard
        </button>
        
        <button
          onClick={handleLogout}
          className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Sign Out
        </button>
      </div>
    </div>
  );

  const renderInitialForm = () => (
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
            placeholder="investor@fund.com"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            className={`w-full p-3 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-auto bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Continue'
          )}
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
  );

  const renderVerificationScreen = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6">
        <button 
          onClick={handleBackClick}
          className="flex items-center text-gray-600"
          disabled={isLoading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
      
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Check your email
      </h1>
      
      <p className="text-gray-600 mb-6">
        We sent a temporary verification link to <span className="text-gray-900">{email}</span>.
      </p>
      
      <div className="flex flex-col space-y-3">
        <button 
          onClick={handleEnterCodeManually}
          disabled={isLoading}
          className="w-full p-3 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Enter code manually
        </button>
        
        <button 
          onClick={handleSignInWithPassword}
          disabled={isLoading}
          className="w-full p-3 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Sign-in with password instead
        </button>
      </div>
      
      <div className="mt-6">
        <a 
          href="#" 
          onClick={handleResendCode}
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          Didn't receive an email?
        </a>
      </div>
    </div>
  );

  const renderCodeEntryScreen = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6">
        <button 
          onClick={handleBackClick}
          className="flex items-center text-gray-600"
          disabled={isLoading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
      
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Enter verification code
      </h1>
      
      <p className="text-gray-600 mb-6">
        We sent a 6-digit code to <span className="text-gray-900">{email}</span>.
      </p>
      
      <form onSubmit={handleVerifyCode}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Verification code
          </label>
          
          <div className="flex justify-between gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleCodeKeyDown(index, e)}
                className={`w-12 h-12 text-center text-xl border ${codeError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                disabled={isLoading}
              />
            ))}
          </div>
          
          {codeError && (
            <p className="mt-2 text-sm text-red-600">{codeError}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={code.join('').length !== 6 || isLoading}
          className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verifying...
            </>
          ) : (
            'Verify'
          )}
        </button>
      </form>
      
      <div className="mt-6 flex justify-between">
        <a 
          href="#" 
          onClick={handleResendCode}
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          Didn't receive a code?
        </a>
        <button 
          onClick={handleSignInWithPassword}
          disabled={isLoading}
          className="text-indigo-600 text-sm font-medium hover:underline disabled:text-indigo-300"
        >
          Sign in with password
        </button>
      </div>
    </div>
  );

  const renderPasswordScreen = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6">
        <button 
          onClick={handleBackClick}
          className="flex items-center text-gray-600"
          disabled={isLoading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
      
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Welcome back
      </h1>
      
      <p className="text-gray-600 mb-6">
        {email}
      </p>
      
      <form onSubmit={handlePasswordSubmit}>
        <div className="mb-6">
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your StartBox password
            </label>
            <input
              type={showPasswordToggle ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              disabled={isLoading}
              className={`w-full p-3 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 top-6"
              onClick={() => setShowPasswordToggle(!showPasswordToggle)}
              disabled={isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {showPasswordToggle ? (
                  <>
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </>
                ) : (
                  <>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>
          
          {passwordError && (
            <p className="mt-1 text-sm text-red-600">{passwordError}</p>
          )}
          
          <div className="mt-2">
            <a 
              href="#" 
              onClick={handleForgotPassword}
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="p-4 mt-5 mr-20 ">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-xl font-bold text-gray-900 cursor-pointer"
            onClick={handleLogoClick}
          >
            StartBox
          </div>
        </div>
      </div>
      
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {isLoggedIn && renderDashboard()}
          {!isLoggedIn && !showVerification && !showPassword && !showCodeEntry && renderInitialForm()}
          {!isLoggedIn && showVerification && !showPassword && !showCodeEntry && renderVerificationScreen()}
          {!isLoggedIn && showPassword && !showCodeEntry && renderPasswordScreen()}
          {!isLoggedIn && showCodeEntry && renderCodeEntryScreen()}
        </div>
      </div>
    </div>
  );
}