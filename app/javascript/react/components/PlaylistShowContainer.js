import React, { useState, useEffect } from "react";
import TrackTile from "./TrackTile";
import SearchResultTile from "./SearchResultTile";
import getUser from "./Utilities/getUser";

const PlaylistShowContainer = (props) => {
  const playlistId = props.match.params.playlistId
  const [playlist, setPlaylist] = useState({})
  const [tracks, setTracks] = useState([])
  const [user, setUser] = useState({})
  const [searchTracks, setSearchTracks] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleGetPlaylist = async() => {
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} - (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const fetchedPlaylist = await response.json()
      setPlaylist(fetchedPlaylist)
      setTracks(fetchedPlaylist["tracks"])
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const handleSetCurrentUser = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  const performSearch = async (searchTracks) => {
    try {
      const response = await fetch(`/api/v1/search?query=${searchTracks}`)
      if (!response.ok) {
        const errorMessage = `${response.status} - (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const fetchedResults = await response.json()
      setSearchResults(fetchedResults.tracks)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const handleSearchChange = (event) => {
    const searchTracks = event.currentTarget.value
    setSearchTracks(searchTracks)
    performSearch(searchTracks)
  }

  const addTrack = (track) => {
    setTracks([...tracks, track])
  }

  const isEditable = playlist.user_id === user.id

  const searchedResultsList = searchResults.map((searchResult) => {
    return (
      <SearchResultTile 
        key={searchResult.id}
        track={searchResult}
        playlistId={playlistId}
        addTrack={addTrack}
        isEditable={isEditable}
      />
    )
  })

  const tracksList = tracks.map((track) => {
    return (
      <TrackTile 
        key={track.id}
        track={track}
      />
    )
  })

  useEffect(() => {
    handleGetPlaylist()
  },[])

  return (
    <div>
      <h2>{playlist.title}</h2>
      {tracksList}
      <input onChange={handleSearchChange} value={searchTracks} placeholder="Search tracks to add!"/>
      {searchedResultsList}
    </div>
  )
}

export default PlaylistShowContainer