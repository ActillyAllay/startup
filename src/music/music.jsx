import React from 'react';

function Queue() {

  localStorage.setItem("queued", JSON.stringify([["one", "author1", "3:56"], ["two", "author2", "1:40"]]))
  
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
          <td><button>&uarr;</button><button>&darr;</button></td>
          <td><button>X</button></td>
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

export function Music() {

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
          <table>
          <tbody>           
            {<Queue />}
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