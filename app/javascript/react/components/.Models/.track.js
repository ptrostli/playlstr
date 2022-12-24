export default class Track {
  constructor(id) {
    this.id = id
    this.key = id
    this.name = null
    this.artist = null
    this.album = null
    this.length = null
    this.spotify_id = null
    this.external_url = null
    this.preview_url = null
    this.artist_url = null
    this.image = null
  }

  setAttributes = (track) => {
    this.key = track.id
    this.id = track.id
    this.name = track.name
    this.artist = track.artist
    this.album = track.album
    this.length = track.length
    this.spotify_id = track.spotify_id
    this.external_url = track.external_url
    this.preview_url = track.preview_url
    this.artist_url = track.artist_url
    this.image = track.image
  }

  addTrack = async () => {
    const playlistId = this.id
    try {
      const requestBody = {
        track: {
          name: this.name,
          album: this.album.name,
          length: this.duration_ms,
          artist: this.artists[0].name,
          spotify_id: this.id,
          external_url: this.external_urls.spotify,
          preview_url: this.preview_url,
          artist_url: this.artists[0].external_urls.spotify,
          image: this.album.images[2].url
        },
      }
      const response = await fetch(`/api/v1/playlists/${playlistId}/tracks`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify (requestBody)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedTrack = await response.json()
      this.setAttributes(fetchedTrack)
      if (fetchedPlaylist.id) {
        console.log('Track added!')
        return fetchedTrack
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }
}