import React, { useState, useEffect } from "react";
import TrackTile from "./TrackTile";

const PlaylistShowContainer = (props) => {
  const playlistId = props.match.params.playlistId
  const [playlist, setPlaylist] = useState({
    tracks: []
  })

  const handleGetPlaylist = async() => {
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} - (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const fetchedPlaylist = await response.json()
      setPlaylist({...fetchedPlaylist, tracks: [...fetchedPlaylist.tracks]})
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  useEffect(() => {
    handleGetPlaylist()
  },[])

  const tracksList = playlist.tracks.map((track) => {
    return (
      <TrackTile 
        key={track.id}
        track={track}
        playlist={playlist}
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

export default PlaylistShowContainer