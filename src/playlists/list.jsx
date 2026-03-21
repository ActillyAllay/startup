import React from 'react';

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
  
  React.useEffect(() => {
    setListName(props.view.name);
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
                props.view.changeSongs([["one", "author1", "3:56"], ["two", "author2", "1:40"], ["three", "author2", "1:40"], ["four", "author2", "1:40"], ["five", "author2", "1:40"], ["six", "author2", "1:40"], ["seven", "author2", "1:40"]])
              }>Set Test Songs</button>
            </div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dreams of Our Generation</td>
                    <td>(Placeholder for Song Info)</td>
                  </tr>
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
                  <tr>
                    <td>1</td>
                    <td>Dreams of Our Generation</td>
                    <td>(Placeholder for Song Info)</td>
                  </tr>
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
