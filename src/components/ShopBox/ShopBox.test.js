import React from 'react';
import ReactDOM from 'react-dom';
import ShopBox from './ShopBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShopBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
