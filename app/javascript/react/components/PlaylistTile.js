import React from "react";
import TrackTile from "./TrackTile";

const PlaylistTile = (props) => {
  const {playlist} = props

  const tracksList = playlist.tracks.map((track) => {
    return (
      <TrackTile 
        key={track.id}
        playlist={playlist}
        track={track}
      />
    )
  })

  return (
    <div>
      <h2>{playlist.title}</h2>
      {tracksList}
    </div>
  )
}

export default PlaylistTile