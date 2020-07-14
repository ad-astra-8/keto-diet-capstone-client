import React from 'react';
import ReactDOM from 'react-dom';
import AddPost from '../AddPost';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const tabs = { 1: "Routine", 2: "Workout", 3: "Recipes" };
  ReactDOM.render(
    <BrowserRouter>
      <AddPost tabs={tabs}/>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});