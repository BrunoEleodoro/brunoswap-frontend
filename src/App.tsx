import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
