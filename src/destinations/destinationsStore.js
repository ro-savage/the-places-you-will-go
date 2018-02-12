import { store } from 'react-easy-state'

const destinations = {
  add: (destination) => { destinations.list.push(destination); console.log(destination, destinations.list)},
  new: '',
  list: [
    'Canberra',
    'Auckland',
    'Berlin',
  ]
}

export default store(destinations)
