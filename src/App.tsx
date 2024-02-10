import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
    let countriesList = ['India', 'Sri Lanka', 'Japan', 'Australia', 'Canada'];
    let citiesList = ['Colombo', 'Matara', 'Galle', 'Kottawa', 'Hokandara'];

    const handleSelectItem = (item: String) => {
      console.log(item);
    }

    return (
        <div className='App'>
            <Alert>
                Hello <span>World</span>
            </Alert>
            <ListGroup heading='Countries' items={countriesList} onSelectItem={handleSelectItem} />
        </div>
    );
}

export default App;
