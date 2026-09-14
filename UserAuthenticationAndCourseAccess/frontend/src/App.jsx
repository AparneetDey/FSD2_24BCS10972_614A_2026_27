import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = "http://localhost:5000"

const App = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 1. On Mount: Fetch active user sessions
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/users`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
        setErrorMessage('Failed to load users from the server.');
      }
    };

    fetchUsers();
  }, []);

  // 2. Login Action: Dispatch POST request to create user
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const newUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setUsername('');
      setErrorMessage('');
    } catch (err) {
      console.error('Error logging in:', err);
      setErrorMessage('Could not log in. Please try again.');
    }
  };

  // 3. Logout Action: Dispatch DELETE request by ID
  const handleLogout = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('User not found or deletion failed');
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      setErrorMessage('');
    } catch (err) {
      console.error('Error logging out user:', err);
      setErrorMessage('Could not remove user. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <h2>Course Access & Authentication Dashboard</h2>

      {errorMessage && (
        <p style={{ color: '#dc2626', background: '#fee2e2', padding: '8px', borderRadius: '4px' }}>
          {errorMessage}
        </p>
      )}

      {/* Login Control */}
      <form onSubmit={handleLogin} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>

      {/* Active Users Table / List */}
      <h3>Active Course Sessions ({users?.length})</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {users?.map((user) => (
          <div
            key={user?.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #e5e7eb',
              padding: '12px',
              borderRadius: '6px',
            }}
          >
            <div>
              <strong>{user?.username}</strong>
              <span
                style={{
                  marginLeft: '10px',
                  fontSize: '0.85rem',
                  color: user?.isLoggedIn ? '#16a34a' : '#9ca3af',
                }}
              >
                ● {user?.isLoggedIn ? 'Active Session' : 'Offline'}
              </span>
            </div>
            <button
              onClick={() => handleLogout(user?.id)}
              style={{
                backgroundColor: '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </div>
        ))}

        {users?.length === 0 && (
          <p style={{ color: '#6b7280', textAlign: 'center', margin: '16px 0' }}>
            No active sessions found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App