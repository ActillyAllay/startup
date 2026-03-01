import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Playlists } from './playlists/playlists';
import { Music } from './music/music';



export default function App() {

  // const [auth, changeAuth] = React.useState(false);
  // localStorage.setItem("auth", true);
  localStorage.setItem("username", "Me");
  // const [auth, setAuth] = React.useState(true);

  const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
  //If username is a value, then authenticated, else unauth
  let authValue = username ? true : false;
  const [auth, setAuth] = React.useState(authValue);
  function authTest() {
    if (auth === true) {
      console.log("Auth is true");
    }
    else if (auth === false) {
      console.log("Auth is false");
    }
    else {
      console.log("Auth is neither");
    }
  }
  authTest();

  function authButton() {
    setAuth(auth === true ? false : true);
    console.log("Auth is now " + {auth});
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
            <menu id="headerButtons">
              <li className="selected"><NavLink to="">Music Player</NavLink></li>
              <li><NavLink to="playlists">Playlists</NavLink></li>
              {auth === true && (
              <li><NavLink to="login">Log In</NavLink></li>
              )}
              {auth === false && (
              <li><NavLink to="playlists">Log Out</NavLink></li>
              )}
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