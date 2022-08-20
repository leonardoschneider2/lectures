import React from 'react';

import RedditContext from '../context/RedditContext';

class Selector extends React.Component {
  render() {
    return (
      <RedditContext.Consumer>
        {({ selectedSubreddit, availableSubreddits, selectSubreddit }) => (
          <div>
            <h1>{`Selected: ${selectedSubreddit}`}</h1>
            <select
              onChange={ (e) => selectSubreddit(e.target.value) }
              value={ selectedSubreddit }
            >
              {availableSubreddits.map((option) => (
                <option
                  value={ option }
                  key={ option }
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </RedditContext.Consumer>
    );
  }
}

export default Selector;
