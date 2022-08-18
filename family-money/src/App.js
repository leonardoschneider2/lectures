import React from 'react';
import GreatGrandFather from './family/GreatGrandFather';

class App extends React.Component {
  render() {
    return (
      <div className="border">
        <h1>Família</h1>
        <GreatGrandFather />
      </div>
    );
  }
}

export default App;
