import React, { useState } from 'react';
import { GithubUser } from './GithubUser'; 
export function GithubUsers() {
	const [searchInput, setSearchInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(`https://api.github.com/search/users?q=${searchInput}`);
			const data = await response.json();
			setSearchResults(data.items.map(user => user.login));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="Enter GitHub username"
				/>
				<button type="submit">Search</button>
			</form>
			<ul>
				{searchResults.map((username) => (
					<li key={username}>
						<GithubUser username={username} />
					</li>
				))}
			</ul>
		</div>
	);
}
