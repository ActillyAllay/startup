import React from "react";

import { Songs } from "./songs";

//listSelect div
export function LS(props) {

  if (props.plList.length) {
    return props.plList;
  } else {
    return (
      <li>No playlists have been made</li>
    );
  }
}


//listView div
export function LV(props) {

  function finish(n) {
    props.setEdit(false);
    props.view.finishEdit(n);
  }

  const viewList = [];
  const [listName, setListName] = React.useState("");
  
  //This is needed, otherwise rendering tries to pull a nonexistent variable
  React.useEffect(() => {
    let n = ""
    try {n = props.view.name;}
    catch {n = "";}
    setListName(n);
  }, [props.view]);


  if (props.plList.length) {
    return (
      <div>
        {props.edit === true && (
          <div id="listView" className="box">
            <img className="album" src={props.view.album} width="100px" />
            <div id="listInfo">
              <input id="listName" type="text" onChange={(e) => setListName(e.target.value)} value={listName} />
              <button onClick={() => finish(listName)}>Finish editing</button>
              <button onClick={() => 
                props.view.changeSongs([["one", "author1", "3:56"], ["two", "author2", "1:40"], ["three", "author3", "2:44"], ["four", "author4", "2:20"], ["five", "author5", "1:08"]])
              }>Set Test Songs</button>
            </div>
            <button className="album" onClick={() => props.view.changeAlbum()}>Edit Playlist Image</button>
            <div>
              <table>
              <tbody>
                {<Songs
                  view={props.view}
                  edit={props.edit}
                />}
              </tbody>
              </table>
            </div>
          </div>
          )}

        {props.edit === false && (
          <div id="listView" className="box">
            <img className="album" src={props.view.album} width="100px" />
            <div id="listInfo">
              <h3>{props.view.name}</h3>
              <button onClick={() => props.setEdit(true)}>Edit this playlist</button>
              <button onClick={() => props.view.delete()}>Delete</button>
            </div>
            <div>
              <table>
              <tbody>
                {<Songs
                  view={props.view}
                  edit={props.edit}
                />}
              </tbody>
              </table>
            </div>
          </div>
          )}
      </div>
    );
  } else {
    return (<div id="listView" className="box"></div>);
  }
}
