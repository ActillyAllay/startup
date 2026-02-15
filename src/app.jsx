import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Playlists } from './playlists/playlists';
import { Music } from './music/music';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <header>
          <div id="headerUser">
            <p>Logged in as User</p>
          </div>
          <div id="headerTitle">
            <h1>Loop Deck</h1>
          </div>
          <nav>
            <menu id="headerButtons">
              <li className="selected"><NavLink to="">Music Player</NavLink></li>
              <li><NavLink to="playlists">Playlists</NavLink></li>
              <li><NavLink to="login">Log In/Log Out</NavLink></li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Music />} exact />
          <Route path='/playlists' element={<Playlists />} />
          <Route path='/login' element={<Login />} />
          {/* Links to the function at the end of this doc */}
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <div id="footerHotkeys">
            <h3>Hotkeys</h3>
            <ul>
              <li>Placeholder</li>
              <li>For</li>
              <li>Hotkeys</li>
              <li>Here</li>
            </ul>
          </div>
          <hr />
          <div id="footerAbout">
            <p>Created by Cassie Rust for CS 260</p>
            <a href="https://github.com/ActillyAllay/startup">GitHub Repository</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}