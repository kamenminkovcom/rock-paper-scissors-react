import React from 'react';
import Game from './containers/Game/Game';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
               <Game />
            </div>
        );
    }
}

export default App;
