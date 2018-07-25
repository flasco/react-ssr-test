
const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const watch = require('gulp-watch');
const nodemon = require('gulp-nodemon');
const gulpSequence = require('gulp-sequence');

gulp.task('client-dist-del', () => {
	return del([
		'client_dist/**/*',
		// 我们不希望删掉这个文件，所以我们取反这个匹配模式
		// '!dist/mobile/deploy.json'
	]);
})

gulp.task('server-dist-del', () => {
	return del([
		'server_dist/**/*',
	]);
})

gulp.task('client-copy', ['client-dist-del'], () => {
	return gulp
		.src('client/src/**/*')
		.pipe(gulp.dest('client_dist'));
})

gulp.task('server-copy', ['server-dist-del'], () => {
	return gulp
		.src('server/**/*')
		.pipe(gulp.dest('server_dist'));
});

gulp.task('client-babel', () => {
	// 设置当前环境为development
	process.env.NODE_ENV = 'development';
	return gulp.src('client/src/**/*.js')
		.pipe(babel({
			presets: ['env', 'react'],
			plugins: [
				"transform-decorators-legacy",
				"add-module-exports",
				"transform-runtime"
			]
		}))
		.pipe(gulp.dest('client_dist'));
});

gulp.task('server-babel', () => {
	return gulp.src('server/**/*.js')
		.pipe(babel({
			presets: ['env'],
			plugins: [
				"transform-decorators-legacy",
				"add-module-exports",
				"transform-runtime"
			]
		}))
		.pipe(gulp.dest('server_dist'));
});

gulp.task('copy', ['server-copy', 'client-copy']);

gulp.task('babel', ['server-babel', 'client-babel']);

gulp.task("watch", () => {
	gulpSequence('copy', 'babel', 'nodemon', () => {
		gulp.src('client/src/**/*.js')
			.pipe(watch('client/src/**/*.js'))
			.pipe(babel({
				presets: ['env', 'react'],
				plugins: [
					"transform-decorators-legacy",
					"add-module-exports",
					"transform-runtime"
				]
			}))
			.pipe(gulp.dest('client_dist'));

		gulp.src('server/**/*.js')
			.pipe(watch('server/**/*.js'))
			.pipe(babel({
				presets: ['env'],
				plugins: [
					"transform-decorators-legacy",
					"add-module-exports",
					"transform-runtime"
				]
			}))
			.pipe(gulp.dest('server_dist'));

		// gulp.watch('client/src/**/*.js', ['client-babel']);
		// gulp.watch('server/**/*.js', ['server-babel']);
	})
});

gulp.task('nodemon', () => {
	return nodemon({
		script: './server_dist/server.dev.js',
	})
})
