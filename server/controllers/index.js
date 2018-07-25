import Router from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../client_dist/page/App';
import { getScript, getStylesheet } from '../utils';

const router = Router();

router.get('*', async (ctx, next) => {
  // let currentTime = new Date().toDateString();
  const template = React.createElement(App);
  const html = ReactDOMServer.renderToNodeStream(template);

  await ctx.render('index', {
    html,
    stylesheet: `${getStylesheet('main.css')}`,
    script: `${getScript('react.js')}${getScript('main.js')}`,
  });
});

module.exports = router;