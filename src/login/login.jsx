import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './login.css';

export function Login() {
  return (
    <main>
      <hr id="tabsDivider" />
      <p className="mx-3">Create a user to save playlists!</p>
      <div id="formWrapper" className="box">
        <form action="index.html" className="px-4">
          <div>
            <label for="userLogin" className="form-label fw-bold">Username:</label>
            <input id="userLogin" type="text" className="form-control" />
            <br />
            <label for="userPass" className="form-label fw-bold">Password:</label>
            <input id="userPass" type="password" className="form-control" />
          </div>
          <div>
            <button type="submit" className="btn btn-outline-dark my-3 fw-bold border border-dark border-2">Create user</button>
            <button type="submit" className="btn btn-outline-dark my-3 fw-bold border border-dark border-2">Log In</button>
          </div>
        </form>
      </div>
    </main>
  );
}