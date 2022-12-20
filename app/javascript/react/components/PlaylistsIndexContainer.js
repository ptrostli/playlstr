import React, {useState, useEffect} from "react";

export default PlaylistsIndexContainer = (props) => {
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

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}