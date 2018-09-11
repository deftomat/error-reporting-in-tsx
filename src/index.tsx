require('@babel/polyfill');

import App from '@app/src/pages/App';
import registerServiceWorker from '@app/src/registerServiceWorker';
import 'antd/es/form/style/index.css';
import React from 'react';
import { render } from 'react-dom';

function renderApp() {
  render(<App apolloClient={null} />, document.getElementById('root'));
}

renderApp();
registerServiceWorker();
