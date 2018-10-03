const gulp = require('gulp');
const ngc = require('gulp-ngc');
const clean = require('gulp-clean');
const header = require('gulp-header');
const rename = require("gulp-rename");
const gulpTypescript = require('gulp-typescript');
const typescript = require('typescript');
const merge = require('merge2');

const pkg = require('./package.json');
const jsHeader = `/**
<%= pkg.name %> - <%= pkg.description %>
version v<%= pkg.version %>
link <%= pkg.homepage %>
license <%= pkg.license %>
*/
`
const dtsHeader =`
// Type definition
// <%= pkg.name %> - <%= pkg.description %>
// v<%= pkg.version %>
// Project: <%= pkg.homepage %>
// Created by: Marc Gusmano (mgusmano@yahoo.com)
`

const useTsConfig = require('gulp-use-tsconfig')
const tsConfigMain = './tsconfig-main.json'
gulp.task('main', () => {
  return gulp.src(tsConfigMain)
    .pipe(useTsConfig.build()) 
})

gulp.task('lib', ['libClean'], libCreate);
function libCreate() {
	const project = gulpTypescript.createProject('./tsconfig-src.json', {typescript: typescript});
	const tsResult = gulp
		.src('src/**/*.ts')
		.pipe(project());
//		.pipe(gulpTypescript(project));
		return merge([
		tsResult.dts
			.pipe(header(dtsHeader, { pkg : pkg }))
			.pipe(gulp.dest('lib')),
		tsResult.js
			.pipe(header(jsHeader, { pkg : pkg }))
			.pipe(gulp.dest('lib'))
	])
}

gulp.task('libClean', libClean);
function libClean() {
	return gulp
		.src('lib', {read: false})
		.pipe(clean());
}





// gulp.task('exp', ['expClean'], expCreate);
// function expCreate() {
// 	const project = gulpTypescript.createProject('./tsconfig-exports.json', {typescript: typescript});
// 	const tsResult = gulp
// 		.src('./exports.ts')
// 		.pipe(project());
// //		.pipe(gulpTypescript(project));
// 	return merge([
// 		tsResult.dts
// 			.pipe(header(dtsHeader, { pkg : pkg }))
// 			.pipe(rename("main.d.ts"))
// 			.pipe(gulp.dest('./')),
// 		tsResult.js
// 			.pipe(header(jsHeader, { pkg : pkg }))
// 			.pipe(rename("main.js"))
// 			.pipe(gulp.dest('./'))
// 	])
// }

// gulp.task('expClean', expClean);
// function expClean() {
// 	return gulp
// 		.src(['./main.d.ts','main.js'], {read: false})
// 		.pipe(clean());
// }
