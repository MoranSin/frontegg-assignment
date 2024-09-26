import './App.css'
import React, { useState, useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal, useAuthActions } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const openAdminPortal = () => {
    AdminPortal.show();
  };

  return (
    <div>
      { isAuthenticated ? (
        <div className='container'>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span className='loginHeader'>Hello {user?.name}!</span>
          </div>
          <div className='buttonsContainer'>
          <div>
            <button onClick={() => logout()}>Logout</button>
          </div>
          <div>
            <button onClick={() => openAdminPortal()}>
              <img className='settings' src='../public/settings.png' alt='settings'/>
            </button>
          </div>
          </div>
        </div>
      ) : (
        <div>
          <img className='fronteggLogo' src='../public/fronteggLogo.png' alt='Frontegg Logo'/>
          <div className='container'>
            <span className='loginHeader'>Hello Guest!</span>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
