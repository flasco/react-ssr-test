## 项目简介
本项目是react的server side rendering的初步实现。client端使用eject的create-react-app，对webpack的config进行了一系列瞎JB乱配，现在勉强能用。 server端使用koa。

## 目录结构
```bash
.
├── README.md
├── bin
│   └── start.js
├── client
│   ├── README.md
│   ├── appConfig.js
│   ├── build
│   ├── config
│   ├── index.html
│   ├── local
│   ├── package.json
│   ├── public
│   ├── scripts
│   ├── src
│   └── yarn.lock
├── client_dist
│   ├── index.css
│   ├── index.js
│   ├── page
│   └── registerServiceWorker.js
├── makefile
├── package.json
├── server
│   ├── app.js
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── server.dev.js
│   ├── utils
│   └── views
├── server_dist
│   ├── app.js
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── server.dev.js
│   ├── utils
│   └── views
└── yarn.lock

```

## 开发之前
首先你需要安装一下依赖
```bash 
make install 
```

## 日常开发
```bash
make dev # 开启服务端
make watch # 开启客户端资源监视
```
