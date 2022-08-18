import React from 'react';
import Daughter from './Daughter';

class Father extends React.Component {
  render() {
    return (
      <div className="border">
        <h2>Father</h2>
        <Daughter />
      </div>
    );
  }
}

export default Father;
