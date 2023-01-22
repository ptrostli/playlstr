import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [featuredPlaylist, setFeaturedPlaylist] = useState({})


  useEffect(() => {

  },[])

  return (
    <div className="home-page">
      <h5><Link to="/playlists">All Playlists</Link></h5>

      <div className="about-section">
        <p>Playlstr is a web-app that allows you to view, create and share.</p>
      </div>
    </div>
  )
}

export default HomePage