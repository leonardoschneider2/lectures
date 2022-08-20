import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

function RedditProvider({children}) {
  const initialPostsBySubreddit = {
    frontend: {
      items: [],
    },
    reactjs: {
      items: [],
    },
  };

  const [postsBySubreddit, setPostsBySubreddit] = useState(initialPostsBySubreddit);
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // falta comparar caso o estado prévio foi alterado ou não
    if (!hasSubredditLoaded()) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = () => {
    setShouldRefreshSubreddit(true);
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess)
      .catch(handleFetchError);
  }

  const hasSubredditLoaded = () => {
    const posts = postsBySubreddit[selectedSubreddit];

    return posts.items.length > 0;
  }

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setShouldRefreshSubreddit(false);
    setIsFetching(false);
    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        items,
        lastUpdated,
      }
    });
  }

  const handleFetchError = (error) => {
    this.setState((state) => ({
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
      postsBySubreddit: {
        ...state.postsBySubreddit,
        [state.selectedSubreddit]: {
          error: error.message,
          items: [],
        },
      },
    }));
  }

  

  const handleSubredditChange = (selectedSubreddit) => setSelectedSubreddit(selectedSubreddit);
  console.log(selectedSubreddit, postsBySubreddit[selectedSubreddit]);
  const context = {
    postsBySubreddit,
    isFetching,
    shouldRefreshSubreddit,
    selectedSubreddit,
    selectSubreddit: handleSubredditChange,
    fetchPosts: fetchPosts,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <RedditContext.Provider value={ context }>
      { children }
    </RedditContext.Provider>
  );
}

export default RedditProvider;

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
