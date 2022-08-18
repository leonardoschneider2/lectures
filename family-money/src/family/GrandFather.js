import React from 'react';
import PropTypes from 'prop-types';
import Father from './Father';

class GrandFather extends React.Component {
  render() {
    const { money, handle } = this.props;
    return (
      <div className="border">
        <h2>GrandFather</h2>
        <Father money={money} handle={handle}/>
      </div>
    );
  }
}

GrandFather.propTypes = { // PropDrealing
  handle: PropTypes.func.isRequired,
  money: PropTypes.number.isRequired,
}

export default GrandFather;
