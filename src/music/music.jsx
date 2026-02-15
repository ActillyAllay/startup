import React from 'react';

export function Music() {
  return (
    <main>
      <hr id="tabsDivider" />
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
          <table>
            <h3>Queue</h3>           
            <tr>
              <td>Dreams of Our Generation</td>
              <td>(Placeholder for Song Info)</td>
              <td><button>&uarr;</button><button>&darr;</button></td>
              <td><button>X</button></td>
            </tr>
            <tr>
              <td>Different Song</td>
              <td>(Placeholder for Song Info)</td>
              <td><button>&uarr;</button><button>&darr;</button></td>
              <td><button>X</button></td>
            </tr>
            <tr>
              <td>Different Song</td>
              <td>(Placeholder for Song Info)</td>
              <td><button>&uarr;</button><button>&darr;</button></td>
              <td><button>X</button></td>
            </tr>
            <tr>
              <td>Different Song</td>
              <td>(Placeholder for Song Info)</td>
              <td><button>&uarr;</button><button>&darr;</button></td>
              <td><button>X</button></td>
            </tr>
            <tr>
              <td>Different Song</td>
              <td>(Placeholder for Song Info)</td>
              <td><button>&uarr;</button><button>&darr;</button></td>
              <td><button>X</button></td>
            </tr>
            <tr>
              <td>Different Song</td>
              <td>(Placeholder for Song Info)</td>
              <td><button>&uarr;</button><button>&darr;</button></td>
              <td><button>X</button></td>
            </tr>
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