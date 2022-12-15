const getPlaylist = async() => {
  try {
    const response = await fetch(`/api/v1/playlists/${match.params.playlistId}`)
    if (!response.ok) {
      const errorMessage = `${response.status} -- (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    } 
    const fetchedPlaylist = await response.json()
    return fetchedPlaylist
  } catch(err) {
    console.error(`ERROR: ${err.message}`)
  }
}

export default getPlaylist