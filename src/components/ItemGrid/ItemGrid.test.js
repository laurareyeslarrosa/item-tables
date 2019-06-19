import React from 'react';
import ReactDOM from 'react-dom';
import ItemGrid from './ItemGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
