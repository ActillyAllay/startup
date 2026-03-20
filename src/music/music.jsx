import React from 'react';

import { Queue } from './queue';

export function Music() {

  const [testNum, setTestNum] = React.useState(0);

  // Can't figure out local storage toubles atm, so this variable needs to be
  //changed alongside each localQueue change to set off the queue useEffect
  function testChange() {
    setTestNum((prevTestNum) => prevTestNum + 1);
  } 

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
            localStorage.setItem("localQueue", JSON.stringify([["one", "author1", "3:56"], ["two", "author2", "1:40"], ["three", "author2", "1:40"], ["four", "author2", "1:40"], ["five", "author2", "1:40"], ["six", "author2", "1:40"], ["seven", "author2", "1:40"]]));
            console.log(localStorage.getItem("localQueue"));
            testChange();
          }}
          >Set Test Queue</button>
          <button
          onClick={ () => {
            console.log("Clear Queue has been clicked");
            localStorage.setItem("localQueue", JSON.stringify([]));
            console.log(localStorage.getItem("localQueue"));
            testChange();
          }}
          >Clear Queue</button>
          <table>
          <tbody>           
            {<Queue 
                testNum = {testNum}
                testChange = {testChange}
              />}
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