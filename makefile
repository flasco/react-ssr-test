start:
	yarn client-dist && yarn server-dist && node ./server_dist/server.dev.js

install:
	yarn install && cd client && yarn install

pre:
	yarn server-dist && NODE_ENV=production node ./server_dist/server.dev.js

dev:
	yarn server-dist && nodemon ./server_dist/server.dev.js

watch:
	cd client && yarn watch