import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetwork from './App';

test('renders learn react link', () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialNetwork  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
