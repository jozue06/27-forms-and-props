import React, { Component } from 'react';
import B from './styledComps.js';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      cowSelect: ''
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    // this.cowSelect = this.cowSelect.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showMenu(e) {

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

handleChange(event) {
  this.updateState(event.target.value);
}


  updateState(cowSelect) {
    this.props.updateCowS(cowSelect);
  }

  render() {
    return (
      <div>
        <B.Button onClick={this.showMenu}>
          Cow Menu
        </B.Button>

        {
          this.state.showMenu ? <div  // eslint-disable-line
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }} >
 <B.Button value="d" onClick={this.handleChange}>
       Cow eyes 1 (a) </B.Button>

 <B.Button value="b" onClick={this.handleChange}>
       Cow eyes 2 (b) </B.Button>


 <B.Button value="p" onClick={this.handleChange}>
       Cow eyes 3 (p) </B.Button>

 <B.Button value="w" onClick={this.handleChange}>
       Cow eyes 4 (w) </B.Button>

 <B.Button value="g" onClick={this.handleChange}>
       Cow eyes 5 (g) </B.Button>

 <B.Button value="s" onClick={this.handleChange}>
       Cow eyes 6 (s) </B.Button>
                       </div>
                : null

        }
      </div>
    );
  }
}

export default Card;