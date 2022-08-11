// src/App.js
import React from 'react';
import ButtonClicks from './pages/ButtonClicks';
import NumberClicks from './pages/NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div>
          <ButtonClicks />
          <NumberClicks />
      </div>
    );
  }
}
export default App;