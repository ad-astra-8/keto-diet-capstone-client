import React from 'react';
import ReactDOM from 'react-dom';
import Forum from '../Forum';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
  <Forum/>
  </BrowserRouter>
 , div);
  ReactDOM.unmountComponentAtNode(div);
});