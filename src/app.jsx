import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Playlists } from './playlists/playlists';
import { Music } from './music/music';



export default function App() {

  localStorage.setItem("username", "Me");

  const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
  {/* If username is a value, then authenticated, else unauth */}
  let authValue = username ? true : false;
  const [auth, setAuth] = React.useState(authValue);

  function authButton() {
    setAuth(auth === true ? false : true);
  }

  return (
    <BrowserRouter>
      <div className="body">
        <header>
          <button onClick={authButton}>Test AuthState</button>
          {auth === true && (
            <div id="headerUser">
              <p>Logged in as {localStorage.getItem("username")}</p>
            </div>
          )}
          <div id="headerTitle">
            <h1>Loop Deck</h1>
          </div>
          <nav>
            {/* <menu id="headerButtons">
              <li className="selected"><NavLink to="">Music Player</NavLink></li>
              <li><NavLink to="playlists">Playlists</NavLink></li>
              {auth === false && (
              <li><NavLink to="login">Log In</NavLink></li>
              )}
              {auth === true && (
              <li><NavLink to="" onClick={authButton}>Log Out</NavLink></li>
              )}
            </menu> */}
            {auth === true && (
            <menu id="headerButtons">
              <li className="selected"><NavLink to="">Music Player</NavLink></li>
              <li><NavLink to="playlists">Playlists</NavLink></li>
              <li><NavLink to="" onClick={authButton}>Log Out</NavLink></li>
            </menu>
            )}
            
            {auth === false && (
            <menu id="headerButtons">
              <li className="selected"><NavLink to="">Music Player</NavLink></li>
              <li><NavLink to="login">Playlists</NavLink></li>
              <li><NavLink to="login">Log In</NavLink></li>
            </menu>
            )}
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Music />} exact />
          {/* Pass along variables to components as element properties*/}
          {/* Currently unused but kept in to show example */}
          <Route path='/playlists' element={<Playlists auth={auth} />} />
          <Route path='/login' element={<Login />} />
          {/* Links to the function at the end of this doc */}
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
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