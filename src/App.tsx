import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ListGroup from './components/ListGroup';

function App() {
    let countriesList = ['India', 'Sri Lanka', 'Japan', 'Australia', 'Canada'];
    let citiesList = ['Colombo', 'Matara', 'Galle', 'Kottawa', 'Hokandara'];

    const handleSelectItem = (item: String) => {
      console.log(item);
    }

    return (
        <div className='App'>
            <ListGroup heading='Countries' items={countriesList} onSelectItem={handleSelectItem} />
            <ListGroup heading='Cities' items={citiesList} onSelectItem={handleSelectItem}/>
        </div>
    );
}

export default App;
