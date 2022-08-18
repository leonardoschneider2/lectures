import React from 'react';
import Father from './Father';

class GrandFather extends React.Component {
  render() {
    return (
      <div className="border">
        <h2>GrandFather</h2>
        <Father />
      </div>
    );
  }
}

export default GrandFather;
