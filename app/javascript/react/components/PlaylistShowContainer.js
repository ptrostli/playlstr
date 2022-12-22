import React, { useState, useEffect } from "react";
import TrackTile from "./TrackTile";
import SearchResultTile from "./SearchResultTile";

const PlaylistShowContainer = (props) => {
  const playlistId = props.match.params.playlistId
  const [shouldDisplay, setShouldDisplay] = useState(true)
  const [searchTracks, setSearchTracks] = useState("")
  const [searchResults, setSearchResults] = useState([])
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

  const handleAddTrack = async() => {
    try {
      const requestBody = {
        track: {
          name: track.name,
          album: track.album.name,
          length: track.duration_ms,
          artist: track.artists[0].name,
          spotify_id: track.id,
          external_url: track.external_urls.spotify,
          preview_url: track.preview_url,
          artist_url: track.artists[0].external_urls.spotify,
          image: track.album.images[2].url
        },
      }
      const response = await fetch(`/api/v1/playlists/${playlistId}/tracks`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(requestBody)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} - (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      setShouldDisplay(false)
      const fetchedPlaylist = await response.json()
      if (fetchedPlaylist.id) {
        console.log(`Track added.`)
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const searchedResultsList = searchResults.map((searchResult) => {
    return (
      <SearchResultTile 
        key={searchResult.id}
        result={searchResult}
        playlistId={playlistId}
      />
    )
  })

  const tracksList = playlist.tracks.map((track) => {
    return (
      <TrackTile 
        key={track.id}
        track={track}
        playlist={playlist}
      />
    )
  })
  
  if (shouldDisplay === false) {
    return null
  }

  useEffect(() => {
    handleGetPlaylist()
  },[])

  return (
    <div>
      <h2>{playlist.title}</h2>
      {tracksList}
      {searchedResultsList}
      <input onChange={handleSearchChange} value={searchTracks} placeholder="Search tracks to add!"/>
    </div>
  )
}

export default PlaylistShowContainer