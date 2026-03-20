import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './login.css';

/* The props parameter is how app.jsx passes down its variables. */
export function Login(props) {

  const [u, setU] = React.useState("");
  const [p, setP] = React.useState("");

  return (
    <main>
      <p className="mx-3">Create a user to save playlists!</p>
      <div id="formWrapper" className="box p-4">
        <div>
          <label htmlFor="userLogin" className="form-label fw-bold">Username:</label>
          <input id="userLogin" type="text" className="form-control" onChange={(e) => setU(e.target.value)} />
          <br />
          <label htmlFor="userPass" className="form-label fw-bold">Password:</label>
          <input id="userPass" type="password" className="form-control" onChange={(e) => setP(e.target.value)} />
        </div>
        <div>
          {/* Signup button is only needed once authorization database is implemented
          <button type="submit" className="btn btn-outline-dark my-3 fw-bold border border-dark border-2">Create user</button> */}
            
          {props.auth === false && (
            <button onClick={() => props.userLogin(u)} className="btn btn-outline-dark my-3 fw-bold border border-dark border-2">Log In</button>
          )}
          {props.auth === true && (
            <button onClick={() => props.userLogin()} className="btn btn-outline-dark my-3 fw-bold border border-dark border-2">Log Out</button>
          )}
        </div>
      </div>
    </main>
  );
}