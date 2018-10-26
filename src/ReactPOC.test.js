import React from 'react';
import ReactDOM from 'react-dom';
import ReactPOC from './ReactPOC';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactPOC />, div);
  ReactDOM.unmountComponentAtNode(div);
});
