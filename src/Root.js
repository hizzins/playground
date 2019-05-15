import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from 'components/App';
import store from 'store';

const Root =() => {
  return (
    <Provider store={store}>
      <div>
        <HashRouter>
          <App />
        </HashRouter>
      </div>
    </Provider>
  )
}

export default Root;
