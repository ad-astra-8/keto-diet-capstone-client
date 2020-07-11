import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Recipe
 />, div);
  ReactDOM.unmountComponentAtNode(div);
});