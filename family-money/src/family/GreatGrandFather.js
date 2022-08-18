import React from 'react';
import GrandFather from './GrandFather';
import myContext from '../myContext';

class GreatGrandFather extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 1000000, // million money
      ifood: 1000,
    }
  }

  handleState = () => {
    this.setState((prevState) => ({
      money: prevState.money - prevState.ifood,
      ifood: prevState.ifood * 2,
    }));
  }

  render() {
    const contextValue = {
      money: this.state.money,
      handle: this.handleState,
    }
    return (
      <myContext.Provider value={contextValue}>
        <div className="border">
          <h2>GreatGrandFather</h2>
          <GrandFather money={this.state.money} handle={this.handleState} />
        </div>
      </myContext.Provider>
    );
  }
}

export default GreatGrandFather;
