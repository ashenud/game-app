import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
    let countriesList = ['India', 'Sri Lanka', 'Japan', 'Australia', 'Canada'];
    let citiesList = ['Colombo', 'Matara', 'Galle', 'Kottawa', 'Hokandara'];

    const handleSelectItem = (item: String) => {
        console.log(item);
    };

    const [displayAlert, setDisplayAlert] = useState(false);

    return (
        <div className='App'>
            {displayAlert && (
                <Alert onClick={() => setDisplayAlert(false)} >
                    Hello <span>World</span>
                </Alert>
            )}
            <Button onClick={() => setDisplayAlert(true)}>Click Here</Button>
            <ListGroup
                heading='Countries'
                items={countriesList}
                onSelectItem={handleSelectItem}
            />
        </div>
    );
}

export default App;
