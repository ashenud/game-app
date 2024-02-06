import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  let countriesList = ['India', 'Sri Lanka', 'Japan', 'Australia', 'Canada'];

  return (
    <div className="App">
      <ListGroup
        heading='Countries'
        items={countriesList}
      />
    </div>
  )
}

export default App
