import React from 'react';
import ReactDom from 'react-dom';

import Cowsay from 'react-cowsay';
import faker from 'faker';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Style from './components/styledComps';
import Card from './components/card.js';
import fetch from 'node-fetch';
import SearchForm from './components/searchForm.js';
import SearchResults from './components/SearchResults.js';
import Reddit from './components/styledReddit.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fakerLorem: '',
      cowSelect: '',
      query: '',
      results: [],
    };

    this.btnCow = this.btnCow.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateCow = this.updateCow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  btnCow(e) {
    this.updateState(this.state.fakerLorem = faker.hacker.phrase());
  }

  updateState(fakerLorem) {
    this.setState({ fakerLorem });
  }

  updateCow(cowSelect) {
    this.setState({ cowSelect });
  }

  handleSubmit(query) {
    console.log(query);
    // this.setState({ query:subreddit });
    let url = `https://www.reddit.com/r/${query.subreddit}.json?limit=${query.limit}`;
    fetch(url).
    then((res) => {
      this.state.error = '';

return res.json();
    }).
then((json) => {

      this.setState({
        results: json.data.children.map((item) => <li key={item.data.id}>
            <Reddit.Link href={item.data.url}>
              {item.data.title}
            </Reddit.Link>
          </li>)
      });
    }).
    catch((err) => {
      console.log(err);
      this.setState({ error: 'error', results: [] });
    });
  }


  render() {
    const opts = {
    };
    opts[this.state.cowSelect] = true;

    return (
      <div>
        <Header />
        <Style.Wrapper>
        <SearchForm submit={this.handleSubmit} />
        <SearchResults results={this.state.results}/>
        <Card updateCowS={this.updateCow}/>
          <Style.Button primary ><p onClick={this.btnCow} id="gen">
            Generate some text for the cow!
          </p>
          </Style.Button>
          <Style.Text>
            <Cowsay {...opts}>{this.state.fakerLorem}</Cowsay>
          </Style.Text>
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));