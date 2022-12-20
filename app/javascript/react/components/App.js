import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'

const App = (props) => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App