const getPlaylists = async() => {
  try {
    const response = await fetch("api/v1/playlists")
    if (!response.ok) {
      const errorMessage = `${response.status} -- (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const fetchedPlaylists = await response.json()
    return fetchedPlaylists
  } catch(err) {
    console.error(`ERROR: ${err.message}`)
  }
}

export default getPlaylists