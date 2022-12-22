import React from "react";

const TrackTile = (props) => {
  const {track} = props

  const time = new Date(track.length);
  
  return (
    <div>
      <p><a href={`${track.external_url}`}>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</a></p>
    </div>
  )
}

export default TrackTile