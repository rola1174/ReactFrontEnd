// LoginForm.js

import React, { useState } from 'react';
import RegisterFormSeekers from './RegisterFormSeekers'; // Import the RegisterFormSeekers component
import './LoginForm.css'; // Import the CSS file for styling

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [showRegisterForm, setShowRegisterForm] = useState(false); // State to toggle between login and registration forms

  const roles = {
    admin: {
      label: 'Admin',
      emailLabel: 'Email:',
      passwordLabel: 'Password:',
    },
    jobseeker: {
      label: 'Job Seeker',
      emailLabel: 'Email:',
      passwordLabel: 'Password:',
    },
    employer: {
      label: 'Employer',
      emailLabel: 'Email:',
      passwordLabel: 'Password:',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling login
    handleLogin({ email, password, role });
  };
  
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    // Hide registration form when role changes
    setShowRegisterForm(false);
  };

  const handleToggleForm = () => {
    // Show registration form only when role is "jobseeker"
    if (role === 'jobseeker') {
      setShowRegisterForm(true); // Show the registration form directly
    }
  };

  return (
    <div className="login-form-container">
      {showRegisterForm ? (
        <RegisterFormSeekers handleRegister={handleLogin} />
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>Select Role:</label>
          <select value={role} onChange={handleRoleChange}>
            {Object.keys(roles).map((key) => (
              <option key={key} value={key}>
                {roles[key].label}
              </option>
            ))}
          </select>
          <label>{roles[role].emailLabel}</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>{roles[role].passwordLabel}</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
          {role === 'jobseeker' && (
            <div className="register-button">
              <p>Don't have an account? <button type="button" onClick={handleToggleForm}>Register</button></p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
