import React from 'react'
import { view } from 'react-easy-state'

import destinations from '../destinationsStore.js'

const AddDestination = () => {
  const onClick = () => {
    destinations.add(destinations.new)
    destinations.new = ''
  }
  return (
    <div>
      <div>Choose a destination</div>
      <input type="text" placeholder="Destination" onChange={(e) => {destinations.new = e.target.value}} value={destinations.new} />
      <button onClick={onClick}>Add Destination</button>
    </div>
  )
}

export default view(AddDestination)
