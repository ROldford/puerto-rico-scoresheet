import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has the correct header and page title', () => {});

it('has a player tab bar', () => {});

it('lets you add players on the tab bar', () => {});

it('lets you remove players on the tab bar', () => {});

// it('has the correct header', () => {});
