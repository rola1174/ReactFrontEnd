
import React, { useState } from 'react';
import './RegisterFormSeekers.css'; // Import the CSS file for styling

const RegisterFormSeekers = ({ handleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      image,
      phone,
    };
    
    handleRegister(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register </h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      <label>Last Name:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      <label>Image:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)}  />
      <label>Phone:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterFormSeekers;
