import Router from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes } from '../../client_dist/routes';
import { getScript, getStylesheet } from '../utils';

const router = Router();

router.get('*', async (ctx, next) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={ctx.url} context={{}}>
      {Routes}
    </StaticRouter>
  );
  await ctx.render('index', {
    html,
    stylesheet: `${getStylesheet('main.css')}`,
    script: `${getScript('vendor.js')}${getScript('main.js')}`,
  });
});

module.exports = router;