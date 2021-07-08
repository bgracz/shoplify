import React from 'react';
import ReactCardFlip from 'react-card-flip';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Cards from './Cards';
import Settings from './Settings';
import './App.css';

// document.ontouchmove = function(e){ e.preventDefault(); }

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div>
        <h1 className="head">Shopify</h1>
        <Cards />
        <SettingsIcon color="action" style={{fontSize: '340%', color: 'white'}} onClick={this.handleClick} />
        </div>

        <div>
        <Settings onSwipe/>
          <ArrowBackIcon color="action" style={{fontSize: '350%', color: 'white'}} onClick={this.handleClick} />
        </div>
      </ReactCardFlip>
    )
  }
}

export default App;
