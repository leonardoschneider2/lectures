import React from 'react';
import PropTypes from 'prop-types';
import Daughter from './Daughter';

class Father extends React.Component {
  render() {
    const { handle, money } = this.props;
    return (
      <div className="border">
        <h2>Father</h2>
        <Daughter money={money} handle={handle}/>
      </div>
    );
  }
}

Father.propTypes = { // PropDrealing
  handle: PropTypes.func.isRequired,
  money: PropTypes.number.isRequired,
}

export default Father;
