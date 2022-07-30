import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <div className="player">
        <fieldset>
          <legend>Player</legend>
          <h1>Nome da Categoria</h1>
          <h2>Título</h2>
        </fieldset>
      </div>
    );
  }
}

export default Player;