import React from 'react';
import "./playlists.css";

import { LS } from './listSelect';
import { Play } from '../../../simon-react/src/play/play';

class Playlist {
  constructor(order, name, songs, user) {
    this.order = order;
    this.name = name;
    this.songs = songs;
    this.userSongs = user + "Songs";

  }

  save() {
    let array = JSON.parse(localStorage.getItem(this.userSongs));
    array.push([this.name, this.songs])
    localStorage.setItem(this.userSongs, JSON.stringify(array));
  }

  //Once songs can be changed, this function will be a finishEdit type function
  changeName(newName) {
    this.name = newName;
  }

  log() {
    console.log("This playlist is", this.name, "and has these songs:", this.songs);
  }

  delete() {
    let array = JSON.parse(localStorage.getItem(this.userSongs));
    array.splice(this.order, 1);
    localStorage.setItem(this.userSongs, JSON.stringify(array));
  }
}

export function Playlists(props) {

  //For testing purposes: Resets the pl list to 2 for user hi
  //localStorage.setItem("hiSongs", JSON.stringify([["Smooth Jams", ["Songs"]], ["List 2", ["Songs"]]]));
  const [userPlaylists, setUserPlaylists] = React.useState(JSON.parse(localStorage.getItem(props.u + "Songs")) || "");
  const plList = [];

  if (userPlaylists.length) {
    for (const [i, pl] of userPlaylists.entries()) {
      window["playlist" + i] = new Playlist(i, pl[0], pl[1], props.u);
      plList.push(<li key={i}>{pl[0]}</li>);
    }
  }

  function newPlaylist() {
    const index = userPlaylists.length
    window["playlist" + index] = new Playlist(index, "New Playlist", [], props.u);
    window["playlist" + index].save();
    setUserPlaylists(JSON.parse(localStorage.getItem(props.u + "Songs")) || "");
  }

  return (
    <main>
      <button id="listUpload" className="upload">Load into the music player</button>
      <h3>Playlists</h3>
      <div id="listSelect">
        <ul>
          {<LS plList={plList}/>}
        </ul>
      </div>
      <button onClick={() => newPlaylist()}>Create new playlist</button>

      <div id="listView" className="box">
        <img className="album" src="placeholder.jpg" width="100px" />
        <div id="listInfo">
          <h3>Smooth Jams</h3>
          <button>Edit this playlist</button>
        </div>
        <div>
          <table>
          <tbody>
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
          </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}