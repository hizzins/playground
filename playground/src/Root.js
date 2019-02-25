import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from 'components/App';

const Root =() => {
  return (
    <div>
      <HashRouter>
      <App />
      </HashRouter>
    </div>
  )
}

export default Root;
