import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../LandingPage';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage
 />, div);
  ReactDOM.unmountComponentAtNode(div);
});