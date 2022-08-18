import React from 'react';
import PropTypes from 'prop-types';

class Daughter extends React.Component {
  render() {
    const { money, handle } = this.props;
    return (
      <div className="border">
        <h2>Daughter</h2>
        <p>{`Tenho $${money},00 dólares pra gastar `}</p>
        <button onClick={handle} type="button">IFOOD</button>
      </div>
    );
  }
}

Daughter.propTypes = { // PropDrealing
  handle: PropTypes.func.isRequired,
  money: PropTypes.number.isRequired,
}

export default Daughter;
