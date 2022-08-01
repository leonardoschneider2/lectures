import React from 'react';
import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Sidebar/>
        <Player />
      </div>
    );
  }
}

export default App;
