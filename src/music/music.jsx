import React from 'react';

import { Queue } from './queue';

export function Music() {

  return (
    <main>
      <div id="gridWrapper">
        <div id="player" className="box">
          <img className="album" src="placeholder.jpg" width="100px" />
          <p>Currently Playing:</p>
          <p className="songInfo">Dreams of Our Generation</p>
          {/* Replace controls with custom controls once on JS phase */}
          <div id="audioWrapper">
            <audio controls preload="metadata" src="https://rhwiki.net/w/images/d/df/Song_Wii_Dreams_of_Our_Generation_Japanese.ogg"></audio>
            <button>Settings</button>
            <button>Loop</button>
            <button>Fade</button>
          </div>
        </div>
        <div id="queue" className="box">
          <h3>Queue</h3>
          <button 
          onClick={ () => {
            console.log("Set Test Queue has been clicked");
            console.log(localStorage.getItem('localQueue'));
            localStorage.setItem("localQueue", JSON.stringify([["one", "author1", "3:56"], ["two", "author2", "1:40"]]));
            console.log(localStorage.getItem('localQueue'));
          }}
          >Set Test Queue</button>
          <button
          onClick={ () => {
            console.log("Clear Queue has been clicked");
            console.log(localStorage.getItem('localQueue'));
            localStorage.setItem("localQueue", JSON.stringify([]));
            console.log(localStorage.getItem('localQueue'));
          }}
          >Clear Queue</button>
          <table>
          <tbody>           
            {<Queue />}
          </tbody>
          </table>
          <br />
        </div>
        <div id="songUpload">
          <button className="upload">Add songs to the queue</button>
        </div>
        <div id="footerHotkeys">
            <h3>Hotkeys</h3>
            <ul>
              <li>Placeholder</li>
              <li>For</li>
              <li>Hotkeys</li>
              <li>Here</li>
            </ul>
          </div>
      </div>
    </main>
  );
}