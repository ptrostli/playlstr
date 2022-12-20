import React, {useState, useEffect} from "react";
import PlaylistTile from "./PlaylistTile";

const HomePage = (props) => {
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

  const playlistsList = playlists.map((playlist) => {
    return (
      <PlaylistTile 
        key={playlist.id}
        playlist={playlist}
      />
    )
  })

  useEffect(() => {
    handleGetPlaylists()
  },[])

  return (
    <div className="home-page">
      <h1>Hi</h1>
      {playlistsList}
    </div>
  )
}

export default HomePage