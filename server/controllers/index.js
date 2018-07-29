import Router from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../client_dist/page/home';
import { getScript, getStylesheet } from '../utils';

const router = Router();

router.get('*', async (ctx, next) => {
  const template = React.createElement(App);
  const html = ReactDOMServer.renderToString(template);

  await ctx.render('index', {
    html,
    stylesheet: `${getStylesheet('main.css')}`,
    script: `${getScript('vendor.js')}${getScript('main.js')}`,
  });
});

module.exports = router;