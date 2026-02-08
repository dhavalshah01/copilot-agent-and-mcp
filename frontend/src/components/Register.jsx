import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // generated-by-copilot: Add userType state with default "member"
  const [userType, setUserType] = useState('member');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // generated-by-copilot: Include userType in registration request
        body: JSON.stringify({ username, password, userType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      setSuccess('Registration successful! You can now log in.');
      // redirect to login page after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {/* generated-by-copilot: Add userType selection dropdown */}
      <select
        name="userType"
        value={userType}
        onChange={e => setUserType(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}
      >
        <option value="member">Member</option>
        <option value="administrator">Administrator</option>
      </select>
      <button id="register" type="submit">Register</button>
    </form>
  );
};

export default Register;
