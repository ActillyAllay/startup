import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Playlists } from './playlists/playlists';
import { Music } from './music/music';



export default function App() {

  const [username, setUsername] = React.useState(localStorage.getItem("username") || "");
  {/* If username is already assigned a value, then authenticated, else unauth */}
  let initialAuth = username ? true : false;
  const [auth, setAuth] = React.useState(initialAuth);

  function userLogin(u="") {
    setAuth(auth === true ? false : true);
    setUsername(u);
    localStorage.setItem("username", u);
  }

  return (
    <BrowserRouter>
      <div className="body">
        <header>
          {auth === true && (
            <div id="headerUser">
              <p>Logged in as {username}</p>
            </div>
          )}
          <div id="headerTitle">
            <h1>Loop Deck</h1>
          </div>
          <nav>
            {auth === true && (
            <menu id="headerButtons">
              {/* Add the selected class back in at some point */}
              <li><NavLink to="">Music Player</NavLink></li>
              <li><NavLink to="playlists">Playlists</NavLink></li>
              <li><NavLink to="" onClick={() => userLogin()}>Log Out</NavLink></li>
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
          <hr id="tabsDivider" />
        </header>

        <Routes>
          <Route path='/' element={<Music />} exact />
          {/* You can pass along variables to components as element properties*/}
          <Route path='/playlists' element={<Playlists u = {username}/>} />
          <Route path='/login' element={<Login
            auth = {auth}
            userLogin = {userLogin}  
          />} />
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