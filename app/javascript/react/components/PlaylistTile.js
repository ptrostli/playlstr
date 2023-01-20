import React from "react";
import { Link } from "react-router-dom";
// import TrackTile from "./TrackTile";

const PlaylistTile = (props) => {
  const {playlist} = props

  // const tracksList = playlist.tracks.map((track) => {
  //   return (
  //     <TrackTile 
  //       key={track.id}
  //       playlist={playlist}
  //       track={track}
  //     />
  //   )
  // })

  return (
    <div className="playlist-tile">
      <Link to={`/playlists/${playlist.id}`}>
        <h3>{playlist.title}</h3>
      </Link>
      <p>{playlist.description}</p>
      {/* {tracksList} */}
    </div>
  )
}

export default PlaylistTile