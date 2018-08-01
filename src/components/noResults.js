import React from 'react';
import Reddit from '../components/styledReddit.js';

class NoResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Reddit.Text>
      <li>error, no subreddit by that name, please search again</li>
      </Reddit.Text>
    ); }
}

export default NoResults;