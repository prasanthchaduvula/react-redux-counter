import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import Counter from './components/Counter';

import '../src/assets/stylesheet/style.scss';

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
