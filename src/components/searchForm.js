import React from 'react';
import Reddit from '../components/styledReddit.js';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
      limit: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    console.log('change targetvalue', ev.target.value);
    console.log('names', ev.target.name);
    const name = ev.target.name;
    const value = ev.target.value;
    this.setState({ [name]: value });
    console.log('the statesasas -->', this.state);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.submit(this.state);
  }


  render() {
    return <form className={this.props.error} onSubmit={this.handleSubmit}>
      <input type="text" name="subreddit" onChange={this.handleChange} value={this.subreddit} placeholder="enter subreddit name" />
      <input type="number" name="limit" value={this.limit} onChange={this.handleChange} min="0" max="100"
       />
      <input type="submit" value="GO!" />
    </form>;
  }
}

export default SearchForm;