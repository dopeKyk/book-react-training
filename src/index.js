import React from 'react';
import ReactDOM from 'react-dom';
import store from './common/store';
import { Provider } from 'react-redux'
import TimelineMain from './timeline/container/TimelineMain';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <div>
      <TimelineMain />
    </div>
  </Provider>,
  rootElement
);
