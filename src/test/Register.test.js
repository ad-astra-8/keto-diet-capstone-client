import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../Register';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register
 />, div);
  ReactDOM.unmountComponentAtNode(div);
});