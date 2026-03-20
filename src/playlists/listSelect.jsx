import React from 'react';

export function LS(props) {
  if (props.plList.length) {
    return props.plList;
  } else {
    return (
        <li>No playlists have been made</li>
    );
  }
}