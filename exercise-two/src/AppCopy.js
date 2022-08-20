import React, { useContext, useEffect } from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';
import RedditContext from './context/RedditContext';

function App() {
  const { selectedSubreddit, postsBySubreddit, isFetching, fetchPosts } = useContext(RedditContext);
  const { lastUpdated, items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = (posts.length === 0);

  useEffect(() => {
    const callFetch = () => {
      fetchPosts();
      console.log('component Did Mount');
    }
    callFetch();
  }, []);

  // retorna tela de loading
  if (isFetching) {
    return (<h2>Loading...</h2>);
  }

  // retorna tela
  return (
    <div>
      <Selector />
      <div>
        { lastUpdated && (
          <span>
            { `Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.` }
          </span>
        ) }

        <button
          type="button"
          onClick={ fetchPosts }
        >
          Refresh
        </button>
      </div>
      { isEmpty ? <h2>Empty.</h2> : <Posts /> }
    </div>
  );
}

export default App;
