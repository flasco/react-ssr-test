import React from 'react';
import { hydrate } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './routes';

hydrate(<App />, document.getElementById('root'));
registerServiceWorker();
