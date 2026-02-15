import React from 'react';
import "./playlists.css";

export function Playlists() {
  return (
    <main>
      <hr id="tabsDivider" />
      <div id="listSelect">
        <button id="listUpload" className="upload">Load into the music player</button>
        <h3>Playlists</h3>
        <ul>
          <li id="listSelected">Smooth Jams</li>
          <li>Nature Sounds</li>
          <li>Other Playlist</li>
        </ul>
      </div>

      <div id="listView" className="box">
        <img className="album" src="placeholder.jpg" width="100px" />
        <div id="listInfo">
          <h3>Smooth Jams</h3>
          <button>Edit this playlist</button>
        </div>
        <div>
          <table>
            <tr>
              <td>1</td>
              <td>Dreams of Our Generation</td>
              <td>(Placeholder for Song Info)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Different Song</td>
              <td>(Even more song info)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Smooth Peanut Butter</td>
              <td>(You guessed it--this is song info)</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}