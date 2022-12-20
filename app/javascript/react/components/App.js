import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import PlaylistsIndexContainer from './PlaylistsIndexContainer'

export default App = (props) => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/playlists" component={PlaylistsIndexContainer} />
          {/* <Route exact path="/playlists/:playlistId" component={PlaylistShowContainer} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}