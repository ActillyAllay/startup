import React from "react";
import "./playlists.css";

import { LS } from "./list";
import { LV } from "./list";



export function Playlists(props) {
  class Playlist {
    constructor(order, name, songs, album, user) {
      this.order = order;
      this.name = name;
      this.songs = songs;
      this.album = album;
      this.userSongs = user + "Songs";

    }

    save() {
      let array = JSON.parse(localStorage.getItem(this.userSongs));
      array.splice(this.order, 1, [this.name, this.songs, this.album])
      localStorage.setItem(this.userSongs, JSON.stringify(array));
      setUserPlaylists(JSON.parse(localStorage.getItem(props.u + "Songs")) || "");
    }

    finishEdit(newName) {
      this.name = newName;
      this.save();
    }

    changeAlbum() {
      // Will eventually get a random image from a third party API
      this.album = "placeholder.jpg";
      this.save();
    }

    changeSongs(newSongs) {
      this.songs = newSongs;
      this.save();
    }

    log() {
      console.log("This playlist is", this.name, "and has these songs:", this.songs);
    }

    delete() {
      let array = JSON.parse(localStorage.getItem(this.userSongs));
      array.splice(this.order, 1);
      localStorage.setItem(this.userSongs, JSON.stringify(array));
      setUserPlaylists(JSON.parse(localStorage.getItem(props.u + "Songs")) || "");
      if (view > 0) {
        setView((prevView) => prevView - 1);
      }
    }
  }

  //For testing purposes: Resets the pl list to 2 for user hi
  //localStorage.setItem("hiSongs", JSON.stringify([["Smooth Jams", ["Songs"], "placeholder.jpg"], ["List 2", ["Songs"], "placeholder.jpg"]]));
  const [userPlaylists, setUserPlaylists] = React.useState(JSON.parse(localStorage.getItem(props.u + "Songs")) || "");
  const plList = [];

  const [view, setView] = React.useState(0);
  const [edit, setEdit] = React.useState(false);
  
  function newPlaylist() {
    const index = userPlaylists.length
    window["playlist" + index] = new Playlist(index, "New Playlist", [], "placeholder.jpg", props.u);
    window["playlist" + index].save();
    setView(index);
  }

  function loadQueue() {
    let old = JSON.parse(localStorage.getItem("localQueue"));
    const n = old.concat(window["playlist" + view].songs);
    localStorage.setItem("localQueue", JSON.stringify(n));
  }

  if (userPlaylists.length) {
    for (const [i, pl] of userPlaylists.entries()) {
      window["playlist" + i] = new Playlist(i, pl[0], pl[1], pl[2], props.u);
      plList.push(
        <li key={i}><button className="plList" onClick={() => setView(i)}>{pl[0]}</button></li>
      );
    }
  }

  return (
    <main>
      <button id="listUpload" className="upload" onClick={() => loadQueue()}>Load into the music player</button>
      <h3>Playlists</h3>
      <div id="listSelect">
        <ul>
          {<LS
            plList={plList}
            edit={edit}
          />}
        </ul>
      </div>
      <button onClick={() => newPlaylist()}>Create new playlist</button>
      
      {<LV
        view={window["playlist" + view]}
        edit={edit}
        setEdit={setEdit}
        plList={plList}
      />}

    </main>
  );
}