start:
	yarn client-dist && yarn server-dist && node ./server_dist/server.dev.js

install:
	yarn install && cd client && yarn install

pre:
	npx gulp client-babel server-babel
	cd client && yarn build
	# NODE_ENV=production node ./server_dist/server.dev.js

watch:
	cd client && yarn watch

dev:
	npx gulp watch # 使用node 8环境