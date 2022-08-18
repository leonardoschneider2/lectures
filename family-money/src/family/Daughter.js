import React from 'react';
import myContext from '../myContext';

class Daughter extends React.Component {
  render() {
    return (
      <div className="border">
        <h2>Daughter</h2>
        <myContext.Consumer>
          {
            value => {
              console.log(value);
              return (
                <>
                  <p>{`Tenho $${value.money},00 dólares pra gastar `}</p>
                  <button onClick={value.handle} type="button">IFOOD</button>
                </>
              );
            }
          }
        </myContext.Consumer>
      </div>
    );
  }
}

export default Daughter;
