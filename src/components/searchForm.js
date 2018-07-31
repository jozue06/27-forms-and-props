import React from 'react';
import Reddit from '../components/styledReddit.js';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    const subreddit = ev.target.value;
    // const limit = ev.target.value;
    this.setState({ subreddit });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.submit(this.state.subreddit);
  }


  render() {
    return <form className={this.props.error} onSubmit={this.handleSubmit}>
      <input type="text"
        name="subreddit"
        onChange={this.handleChange}
        value={this.state.subreddit}
        placeholder="enter subreddit name" />
      {/* <input type="number" name="limit" value={this.state.limit} min="0" max="100"
       /> */}
      <input type="submit" value="GO!" />
    </form>;
  }
}

export default SearchForm;