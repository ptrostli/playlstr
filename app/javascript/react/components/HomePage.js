import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h5 className="links"><Link to="/playlists">All Playlists</Link></h5>

      <div className="about-section">
        <h3><strong>Playlstr</strong> is a web-app that allows you to view, create and share playlists by integrating the Spotify API.</h3>
        <a href="/users/sign_up"><p>Create an account quick & easily to get started!</p></a>
      </div>

      <div>
        <h4 className="header">U P C O M I N G</h4>
        <ul>
          <li className="done">Sign-up and sign-in page styling.</li>
          <li>Track tile styling (album images, additional information, etc..).</li>
          <li>Play samples of tracks.</li>
          <li>Playlist reviews and ratings.</li>
          <li>Proper playlist edit page.</li>
          <li>User show page - detailing users submitted playlists, reviews and ratings.</li>
        </ul>

        <h4 className="header">B U G S</h4>
        <ul>
          <li>Error message regarding a "key" when adding new tracks persists. WHY DID YOU RETURN?</li>
          <li>A unregistered visitor should be redirected to a login page, when trying to create a new playlist.</li>
          <li>Removing a track after adding it in the same session does not work.</li>
          <li>On some tracks, the conversion to minutes and seconds does not work and will display excessive amounts of seconds.</li>
        </ul>

        <h4 className="header">F U T U R E &nbsp;&nbsp; F E A T U R E S</h4>
        <ul>
          <li>Filter by playlist vibe, rating, and/or number of reviews.</li>
          <li>Add uploadable profile pictures.</li>
          <li>Add uploadable playlist pictures.</li>
          <li>OAuth connection to Spotify account.</li>
          <li>Modal functionality. Add drag and drop functionality to add/remove tracks in playlist.</li>
        </ul>
      </div>
      <br></br>
    </div>
  )
}

export default HomePage