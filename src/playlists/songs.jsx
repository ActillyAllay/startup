import React from "react";

export function Songs(props) {

  function move(array, order, direction="") {

    let newSong = array[order];
    let movement = order;
    if (direction === "up") {
      movement = order - 1;
      array.splice(movement, 0, newSong);
      console.log(array);
      movement = order + 1;
    } else if (direction === "down") {
      movement = order + 2;
      array.splice(movement, 0, newSong);
      movement = order;
    };
    array.splice(movement, 1);
    props.view.changeSongs(array);
}

  
  const [queued, setQueued] = React.useState([]);
  const queueList = [];

  React.useEffect(() => {
    const storedSongs = props.view.songs;
    if (storedSongs) {
      setQueued(storedSongs);
    }
  }, [props.view]);

  if (queued.length) {
    for (const [i, song] of queued.entries()) {    
      queueList.push(
        <tr key={i}>
          <td>{song[0]}</td>
          <td>{song[1]}</td>
            <td>
              {/* Prevents the up/down arrows displaying on top/bottom */}
              {props.edit === true && i != 0 && (
                <button onClick={() => move(queued, i, "up")}>&uarr;</button>
              )}
              {props.edit === true && i != (queued.length - 1) && (
                <button onClick={() => move(queued, i, "down")}>&darr;</button>
              )}
            </td>
              {props.edit === true && (
              <td><button onClick={() => move(queued, i)}>X</button></td>
              )}
              {props.edit === false && (
              <td>{song[2]}</td>
              )}
        </tr>
      )
    }
    return queueList;
  } else {
    return (
      <tr>
        <td>No songs in the queue</td>
      </tr>
    );
  }
}

