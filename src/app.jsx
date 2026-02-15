import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light">
      <header>
        <div id="headerUser">
          <p>Logged in as User</p>
        </div>
        <div id="headerTitle">
          <h1>Loop Deck</h1>
        </div>
        <nav>
          <menu id="headerButtons">
            <li className="selected">Music Player</li>
            <li><a href="playlists.html">Playlists</a></li>
            <li><a href="login.html">Log In/Log Out</a></li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

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
  );
}