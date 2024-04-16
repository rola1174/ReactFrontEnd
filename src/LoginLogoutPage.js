import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import JobSeekerDashboard from './JobSeekerDashboard';
import EmployerDashboard from './EmployerDashboard';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

const LoginLogoutPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          {loggedInUser.role === 'admin' && <AdminDashboard user={loggedInUser} />}
          {loggedInUser.role === 'jobseeker' && <JobSeekerDashboard user={loggedInUser} />}
          {loggedInUser.role === 'employer' && <EmployerDashboard user={loggedInUser} />}
          <LogoutButton handleLogout={handleLogout} />
        </div>
      ) : (
        <div>
          <LoginForm handleLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default LoginLogoutPage;

