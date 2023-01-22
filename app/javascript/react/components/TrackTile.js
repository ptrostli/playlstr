import React, { useState } from "react";

const TrackTile = (props) => {
  const {track, playlistId, isEditable} = props
  const [shouldShow, setShouldShow] = useState(true)

  const handleRemoveTrack = async () => {
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}/tracks/${track.id}`, {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      console.log(`"${track.name}" by ${track.artist} -- has been removed from the playlist.`)
      if (response) {
        setShouldShow(false)
      }
      return true
    } catch(err) { 
      console.error(`ERROR: ${err.message}`)
      return false
    }
  }

  if (!shouldShow) { 
    return null
  }

  const time = new Date(track.length);
  
  return (
    <div className="track-tile">
      {isEditable && <input type="button" value="-" onClick={handleRemoveTrack} />}
      <p><a href={`${track.external_url}`}>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</a></p>
    </div>
  )
}

export default TrackTile