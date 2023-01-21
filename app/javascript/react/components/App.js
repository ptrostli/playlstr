import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PlaylistShowContainer from './PlaylistShowContainer'
import PlaylistsIndexContainer from './PlaylistsIndexContainer'
import NewPlaylistForm from './NewPlaylistForm'

const App = (props) => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PlaylistsIndexContainer} />
          <Route exact path="/playlists" component={PlaylistsIndexContainer} />
          <Route exact path="/playlists/new" component={NewPlaylistForm} />
          <Route exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App