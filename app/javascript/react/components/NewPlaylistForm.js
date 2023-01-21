import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom'
import ErrorList from "./ErrorList";

const NewPlaylistForm = (props) => {
  const [errors, setErrors] = useState({})
  const [redirect, setRedirect] = useState(false)
  const [redirectLink, setRedirectLink] = useState("")
  const [newPlaylist, setNewPlaylist] = useState({
    title: '',
    description: ''
  })

  const validSubmission = () => {
    let showErrors = {}
    const requiredFields = ['title']
    requiredFields.forEach(field => {
      if (newPlaylist[field].trim() === "") {
        showErrors = {
          ...showErrors,
          [field]: "is required."
        }
      }
    })
    setErrors(showErrors)
    return _.isEmpty()
  }
  
  const handleChange = (event) => {
    setNewPlaylist({
      ...newPlaylist,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleCreatePlaylist = async (event) => {
    event.preventDefault()
    if (validSubmission()) {
      try {
        const response = await fetch('/api/v1/playlists', {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ playlist: newPlaylist })
        })
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
        const fetchedPlaylist = await response.json()
        if (fetchedPlaylist.id) {
          console.log('Playlist created!')
          setRedirectLink(`/playlists/${fetchedPlaylist.id}`)
          setRedirect(true)
        }
      } catch(err) {
        console.error(`ERROR: ${err.message}`)
      }
    }
  }

  if (redirect === true) {
    return <Redirect to={redirectLink}/>
  }

  return (
    <div className="playlist-form-container">
      <div className="links">
        <Link to="/playlists">All Playlists</Link>
      </div>
      <h1 className="header">Create A Playlist</h1>
      <form className="new-playlist-form" onSubmit={handleCreatePlaylist}>
        <ErrorList errors={errors} />
        <label>
          <h5>Title</h5>
          <input name="title" id="title" type="text" onChange={handleChange} value={newPlaylist.title}/>
        </label>
        <label>
          <h5>Description</h5>
          <input className="description-input"name="description" id="description" type="text" value={newPlaylist.description} onChange={handleChange}/>
        </label>
        <input className="create-playlist"type="submit" value="Create New Playlist"/>
      </form>
    </div>
  )
}

export default NewPlaylistForm