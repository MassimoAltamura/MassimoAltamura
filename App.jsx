import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';
import { Welcome } from './Welcome';
import { Counter } from './Counter';

export function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Welcome name="Jimmy" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUsers />}>
            
            <Route index element={<div>Add a user and select it</div>} />
            <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<div>Not Found!</div>} />
    </Routes>

    <div data-testid="links">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/johndoe">Johnny</Link>
    </div>
</BrowserRouter>
  );
}
