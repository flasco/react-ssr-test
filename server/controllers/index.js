import Router from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Routes } from '../../client_dist/routes';
import { getScript, getStylesheet } from '../utils';
import reducers from '../../client_dist/models/reducers';

const router = Router();

router.get('*', async (ctx, next) => {
  let store = createStore(reducers, {});
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>

  );
  await ctx.render('index', {
    _global: setGloabal({
      user: '123',
    }),
    html,
    stylesheet: `${getStylesheet('main.css')}`,
    script: `${getScript('vendor.js')}${getScript('main.js')}`,
  });
});

function setGloabal(obj) {
  return `<script>var _global = ${JSON.stringify(obj)}</script>`
}

module.exports = router;