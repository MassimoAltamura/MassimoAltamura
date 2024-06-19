
import React, { useState } from 'react';
import { GithubUser } from './GithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
      setUsername('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {usernames.map((user) => (
          <GithubUser key={user} username={user} />
        ))}
      </div>
    </div>
  );
};

export default GithubUsers;
