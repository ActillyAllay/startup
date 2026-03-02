import React from 'react';

function move(q, order, direction="") {
  let array = q;
  let newArray = array[order];
  let movement = order;
  if (direction === "up") {
    movement = order - 1;
    array.splice(movement, 0, newArray);
    movement = order + 1;
  } else if (direction === "down") {
    movement = order + 2;
    array.splice(movement, 0, newArray);
    movement = order;
  };
  array.splice(order, 1);
  return array;
}

// function arrowButton(q, order, direction) {
//   setItem("queued", JSON.stringify(move(q, order, direction)));
// }

export function Queue() {

  const [queued, setQueued] = React.useState([]);
  const queueList = [];
  
  React.useEffect(() => {
    const storedQueue = localStorage.getItem('queued');
    if (storedQueue) {
      setQueued(JSON.parse(storedQueue));
    }
  }, []);

  if (queued.length) {
    for (const [i, song] of queued.entries()) {    
      queueList.push(
        <tr key={i}>
          <td>{song[0]}</td>
          <td>{song[1]}</td>
          <td><button onClick={() => setQueued(move(queued, i, "up"))}>&uarr;</button>
              <button onClick={() => setQueued(move(queued, i, "down"))}>&darr;</button></td>
          <td><button onClick={() => setQueued(move(queued, i))}>X</button></td>
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

