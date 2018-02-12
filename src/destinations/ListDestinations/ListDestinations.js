import React from 'react'
import { view } from 'react-easy-state'

import destinations from '../destinationsStore.js'

const ListDestination = () => {
  return (
    <ul>
      {destinations.list.map(destination => {
        return (
          <li key={destination}>{destination}</li>
        )
      })}
    </ul>
  )
}

export default view(ListDestination)
