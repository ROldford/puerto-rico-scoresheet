// Package imports
import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import {Grid} from 'react-bootstrap';

// Component imports
import App from './App';
import Header from './components/Header.js';
import ScoringInput from './components/ScoringInput.js';


// Basic smoke test
describe('Basic Site Rendering', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
}); // end describe

describe('App', () => {
  // Set up
  let mountedScoresheet;
  const scoresheet = () => {
    if (!mountedScoresheet) {
      mountedScoresheet = mount(<App />);
    }
    return mountedScoresheet;
  }

  beforeEach(() => {
    mountedScoresheet = undefined;
  });

  // Tests
  it('always renders a Grid', () => {
    const grids = scoresheet().find(Grid);
    expect(grids.length).toBeGreaterThan(0);
  }); // end it

  it('has a Header that renders', () => {
    expect(scoresheet().find(Header).length).toBe(1);
  }); // end it

  it('has a ScoringInput that renders', () => {
    expect(scoresheet().find(ScoringInput).length).toBe(1);
  }); // end it
}); // end describe

// describe('something', () => {}); // end describe
// it('something', () => {}); // end it
