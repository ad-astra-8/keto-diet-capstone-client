import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from '../Recipes';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <Recipes />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});