import React, { useState } from "react";

const SearchResultTile = (props) => {
  const { track, isEditable, playlistId, addTrack } = props
  const [shouldDisplay, setShouldDisplay] = useState(true)

  const handleAddTrack = async() => {
    try {
      const trackObject = {
        name: track.name,
        album: track.album.name,
        length: track.duration_ms,
        artist: track.artists[0].name,
        spotify_id: track.id,
        external_url: track.external_urls.spotify,
        preview_url: track.preview_url,
        artist_url: track.artists[0].external_urls.spotify,
        image: track.album.images[2].url,
        uri: track.uri
      }
      const requestBody = { track: trackObject }
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
        addTrack(trackObject)
        console.log(`"${track.name}" by ${track.artists[0].name} -- has been added to the playlist."`)
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  if (shouldDisplay === false) {
    return null
  }

  const time = new Date(track.duration_ms)

  const spotifyUri = `https://embed.spotify.com/?uri=${track.uri}`

  return (
    <div className="search-result-tile">
    {/* <div className="spotify-embeds"> */}
      {/* <div className="spotify-embed"> */}
      { isEditable && <input type="button" value="+" onClick={handleAddTrack} />}
        <a href={`${track.external_urls.spotify}`}>
        <img className="album-image" src={`${track.album.images[2].url}`} height="40" width="40"></img>
        <p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artists[0].name}</p>
      </a>
    </div>
  )
}

export default SearchResultTile