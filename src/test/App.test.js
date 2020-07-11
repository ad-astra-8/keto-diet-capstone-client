import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

it.skip('renders App component without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <App>
          </App>
    </BrowserRouter>, 
    div
    );
    ReactDOM.unmountComponentAtNode(div);
});
