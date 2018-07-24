import Koa from 'koa';
import views from 'koa-views';
import staticServer from 'koa-static';
import path from 'path';
// import 'babel-polyfill';
// import utils from './utils';

import routes from './routes';

const app = new Koa();

app.use(views(path.join(__dirname, './views'), { extension: 'ejs' })) //视图加载

app.use(
  staticServer(
    path.join(__dirname, process.env.NODE_ENV == 'development' ? '../client/local' : '../client/build')
    , {
      maxage: 1000 * 60 * 60 * 24 * 30,
      hidden: true,
      gzip: true,
    }
  )
); //静态资源加载

app.use(routes.routes(), routes.allowedMethods()); // 路由加载

app.on('error', err => {
  console.error('server error', err)
});

// app.locals.loadScript = utils;

export default app;