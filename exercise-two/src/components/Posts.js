import React from 'react';

import RedditContext from '../context/RedditContext';

class Posts extends React.Component {
  render() {
    return (
      <RedditContext.Consumer>
        {({ posts }) => (
          <ul>
            {posts.map(({ id, title }) => <li key={ id }>{title}</li>)}
          </ul>
        )}
      </RedditContext.Consumer>
    );
  }
}
export default Posts;
