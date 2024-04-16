/*import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const RoleSelectionPage = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = () => {
    // Perform any necessary login action based on the selected role
    console.log(`Logged in as ${role}`);
  };

  if (role) {
    return <Redirect to={`/login/${role}`} />;
  }

  return (
    <div>
      <h2>Select Role</h2>
      <label>Select a role:</label>
      <select value={role} onChange={handleRoleChange}>
        <option value="">-- Select Role --</option>
        <option value="admin">Admin</option>
        <option value="jobseeker">Job Seeker</option>
        <option value="employer">Employer</option>
      </select>
      <button disabled={!role} onClick={handleLogin}>
        Continue
      </button>
    </div>
  );
};

export default RoleSelectionPage;*/