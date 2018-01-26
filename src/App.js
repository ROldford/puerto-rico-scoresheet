import React, { Component } from 'react';
import Header from './components/Header';
import ScoringInput from './components/ScoringInput';


class App extends Component {
  render() {
    return (
      <div className='scoresheet'>
        <Header />
        <div className='scoring-input'>
          <ScoringInput />
        </div>
      </div>
    );
  }
}

export default App;
