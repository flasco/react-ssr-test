
const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('client-dist-del', (cb) => {
	del([
		'client-dist/**/*',
		// 我们不希望删掉这个文件，所以我们取反这个匹配模式
		// '!dist/mobile/deploy.json'
	], cb);
})

gulp.task('server-dist-del', (cb) => {
	del([
		'server-dist/**/*',
		// 我们不希望删掉这个文件，所以我们取反这个匹配模式
		// '!dist/mobile/deploy.json'
	], cb);
})

gulp.task('client-copy', ['client-dist-del'], () => {
	return gulp
		.src('client/src/**/*')
		.pipe(gulp.dest('client_dist'));
})

gulp.task('server-copy', ['server-dist-del'], () => {
	return gulp
		.src('server/**/*.js')
		.pipe(gulp.dest('server_dist'));
});

gulp.task('client-babel', () => {
	// 设置当前环境为development
	process.env.NODE_ENV = 'development';
	return gulp.src('client/src/**/*.js')
		.pipe(babel({
			presets: ['env', 'react']
		}))
		.pipe(gulp.dest('client_dist'));
});

gulp.task('server-babel', () => {
	return gulp.src('server/**/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('server_dist'));
});

gulp.task('copy', ['server-copy', 'client-copy']);

gulp.task('babel', ['server-babel', 'client-babel']);

gulp.task("watch", ['copy'], () => {
	gulp.watch('client/src/**/*.js', ['client-babel']);
	gulp.watch('server/**/*.js', ['server-babel']);
})
