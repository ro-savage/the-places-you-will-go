import React, { Component } from "react"
import "./App.css"

import { view } from 'react-easy-state'
import AddDestination from './destinations/AddDestination/AddDestination';
import ListDestinations from './destinations/ListDestinations/ListDestinations';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddDestination />
          <ListDestinations />
        </header>
      </div>
    )
  }
}

export default App
