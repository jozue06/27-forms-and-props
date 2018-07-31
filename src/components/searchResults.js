import React from 'react';
import Reddit from '../components/styledReddit.js';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Reddit.Wrapper>
      <div>
      <ul>
      <Reddit.Text>
      {this.props.results}
      </Reddit.Text>
      </ul>
     </div>
     </Reddit.Wrapper>
    ); }
}

export default SearchResults;