import React from 'react';
import { render } from 'react-dom';

import App from './AppCopy';
import RedditProvider from './context/RedditProvider';

render(
  <RedditProvider>
    <App />
  </RedditProvider>,
  document.getElementById('root'),
);
