import './App.css'
import React, { useState, useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal, useAuthActions } from "@frontegg/react";

function App() {
  const [tenants, setTenants] = useState([]);
  const { switchTenant } = useAuthActions();
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    fetchTenants();
  }, []);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleSwitchTenant = () => { 
    switchTenant({ tenantId: user.tenantId });
};

  const openAdminPortal = () => {
    AdminPortal.show();
  };

  const fetchTenants = () => {

  }

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Hello {user?.name}!</span>
          </div>
          <div>
            <button onClick={() => logout()}>Logout</button>
          </div>
          <div>
            <button onClick={() => openAdminPortal()}>Settings</button>
          </div>
          <div>
      <label htmlFor="tenantDropdown">Switch Tenant:</label>
      <select
        id="tenantDropdown"
        value={activeTenant || ''}
        onChange={(e) => handleTenantChange(e.target.value)}
      >
        <option value="" disabled>Select a tenant</option>
        {tenants.map((tenant) => (
          <option key={tenant.id} value={tenant.id}>
            {tenant.name}
          </option>
        ))}
      </select>
    </div>
          {/* <div>
            <button onClick={() => handleSwitchTenant()}>Tenant List</button>
          </div> */}
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App
