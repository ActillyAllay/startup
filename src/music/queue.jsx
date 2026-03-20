import React from 'react';




// function arrowButton(q, order, direction) {
//   setItem("queued", JSON.stringify(move(q, order, direction)));
// }

export function Queue(props) {
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

    localStorage.setItem("localQueue", JSON.stringify(array));
    props.testChange();
}

  
  const [queued, setQueued] = React.useState([]);
  const queueList = [];

  React.useEffect(() => {
    const storedQueue = localStorage.getItem("localQueue");
    if (storedQueue) {
      setQueued(JSON.parse(storedQueue));
    }
  }, [props.testNum]);

  if (queued.length) {
    for (const [i, song] of queued.entries()) {    
      queueList.push(
        <tr key={i}>
          <td>{song[0]}</td>
          <td>{song[1]}</td>
            <td>
              {/* Prevents the up/down arrows displaying on top/bottom */}
              {i != 0 && (
                <button onClick={() => move(queued, i, "up")}>&uarr;</button>
              )}
              {i != (queued.length - 1) && (
              <button onClick={() => move(queued, i, "down")}>&darr;</button>
              )}
            </td>
            <td><button onClick={() => move(queued, i)}>X</button></td>
        </tr>
      )
    }
    return queueList;
  } else {
    return (
      <tr>
        <td>No songs in the queue</td>
      </tr>
    )
  }
}

