import React from "react";

const TrackTile = (props) => {
  const {playlist, track} = props
  console.log(playlist)
  console.log(track)

  return (
    <div>
      <p>{track.name}</p>
    </div>
  )
}

export default TrackTile