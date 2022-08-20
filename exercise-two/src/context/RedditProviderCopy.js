import PropTypes from 'prop-types';
import React from 'react';

import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

class RedditProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      postsBySubreddit: {
        frontend: {
          items: [],
        },
        reactjs: {
          items: [],
        },
      },
      selectedSubreddit: 'reactjs',
      shouldRefreshSubreddit: false,
      isFetching: false,
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    const { selectedSubreddit } = this.state;
    const selectedSubredditChanged = prevState.selectedSubreddit !== selectedSubreddit;

    if (selectedSubredditChanged && !this.hasSubredditLoaded()) {
      this.fetchPosts();
    }
  }

  hasSubredditLoaded = () => {
    const {
      selectedSubreddit,
      postsBySubreddit,
    } = this.state;

    const posts = postsBySubreddit[selectedSubreddit];

    return posts.items.length > 0;
  }

  handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    this.setState((state) => ({
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
      postsBySubreddit: {
        ...state.postsBySubreddit,
        [state.selectedSubreddit]: {
          items,
          lastUpdated,
        },
      },
    }));
  }

  handleFetchError = (error) => {
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

  fetchPosts = () => {
    this.setState({
      shouldRefreshSubreddit: false,
      isFetching: true,
    });

    const { selectedSubreddit } = this.state;
    getPostsBySubreddit(selectedSubreddit)
      .then(this.handleFetchSuccess)
      .catch(this.handleFetchError);
  }

  handleSubredditChange = (selectedSubreddit) => this.setState({ selectedSubreddit });

  render() {
    const { children } = this.props;
    const { selectedSubreddit, postsBySubreddit } = this.state;
    const context = {
      ...this.state,
      selectSubreddit: this.handleSubredditChange,
      fetchPosts: this.fetchPosts,
      availableSubreddits: Object.keys(postsBySubreddit),
      posts: postsBySubreddit[selectedSubreddit].items,
    };

    return (
      <RedditContext.Provider value={ context }>
        { children }
      </RedditContext.Provider>
    );
  }
}

export default RedditProvider;

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
