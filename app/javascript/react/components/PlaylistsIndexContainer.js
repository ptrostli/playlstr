import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlaylistTile from "./PlaylistTile";
import PlaylistSearchBar from "./PlaylistSearchBar";

const PlaylistsIndexContainer = (props) => {
  const [playlists, setPlaylists] = useState([])

  const handleGetPlaylists = async() => {
    try {
      const response = await fetch("api/v1/playlists")
      if (!response.ok) {
        const errorMessage = `${response.status} -- (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedPlaylists = await response.json()
      setPlaylists(fetchedPlaylists)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  useEffect(() => {
    handleGetPlaylists()
  },[])

  const playlistsList = playlists.map((playlist) => {
    return (
      <PlaylistTile 
        key={playlist.id}
        playlist={playlist}
      />
    )
  })

  return (
    <div className="playlists-index">
      <div className="links">
        <Link to='/'>Return Home</Link>
        {/* <Link to='/playlists/new'>Create Playlist</Link> */}
      </div>
      <h1 className="header">All Playlists</h1>
      <PlaylistSearchBar 
        playlists={playlists}
        setPlaylists={setPlaylists}
      />
      {playlistsList}
    </div>
  )
}

export default PlaylistsIndexContainer