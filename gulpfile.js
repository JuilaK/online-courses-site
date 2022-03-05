 'use strict';

import gulp from "gulp";
import { path } from './gulp/config/path.js';
import { plugins } from "./gulp/config/plugins.js";
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { script } from './gulp/tasks/script.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';

const { watch, parallel, series, task } = gulp;

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watchFiles() {
    watch(path.watch.html, html);
    watch(path.watch.scss, scss);
    watch(path.watch.js, script);
    watch(path.watch.images, images);
    watch([path.watch.fonts, path.watch.icons], fonts);
}

const mainTasks =  parallel(html, scss, script, images, fonts);

const dev = series(reset, mainTasks, parallel(watchFiles, server));
const build = series(reset, mainTasks);
task('default', dev);

export { dev };
export { build };

// const {src, dest, watch, parallel, series} = require('gulp');
// const webpack = require('webpack');
// const webpackStream = require('webpack-stream');
// const browserSync = require('browser-sync').create();
// const del = require("del");
// const rename = require("gulp-rename");
// const notify = require('gulp-notify');
// const fileinclude = require('gulp-file-include');
// const scss = require('gulp-sass')(require('sass'));
// const autoprefixer = require('gulp-autoprefixer');
// const cssnano = require("gulp-cssnano");
// const uglify = require('gulp-uglify-es').default;
// const svgSprite = require('gulp-svg-sprite');

// /* Paths */
// const srcPath = 'src/';
// const distPath = 'dist/';

// const path = {
//     build: {
//         html:   distPath,
//         js:     distPath + "assets/js/",
//         css:    distPath + "assets/css/",
//         images: distPath + "assets/images/",
//         fonts:  distPath + "assets/fonts/"
//     },
//     src: {
//         html:   srcPath + "*.html",
//         js:     srcPath + "assets/js/*.js",
//         css:    srcPath + "assets/scss/*.scss",
//         images: srcPath + "assets/images/**/*.{jpg,png,gif,ico,webp,webmanifest,xml,json}",
//         svg:    srcPath + "assets/images/**/*.svg",
//         fonts:  srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
//     },
//     watch: {
//         html:   srcPath + "**/*.html",
//         js:     srcPath + "assets/js/**/*.js",
//         css:    srcPath + "assets/scss/**/*.scss",
//         images: srcPath + "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
//         svg:    srcPath + "assets/images/**/*.svg",
//         fonts:  srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
//     },
//     clean: "./" + distPath
// }

// /* Tasks */

// function js() {
//     return src(path.src.js, {base: srcPath + 'assets/js/'})
//         .pipe(webpackStream({
//             mode: "production",
//             output: {
//                 filename: 'script.js',
//                 environment: {
//                     arrowFunction: false,
//                     bigIntLiteral: false,
//                     const: false,
//                     destructuring: false,
//                     dynamicImport: false,
//                     forOf: false,
//                     module: false,
//                   }
//             },
//             module: {
//                 rules: [
//                     {
//                         test: /\.(js)$/,
//                         exclude: /(node_modules)/,
//                         use: {
//                             loader: 'babel-loader',
//                             options: {
//                                 presets: ['@babel/preset-env']
//                             }
//                         }
//                     }
//                 ]
//             }
//         }))
//         .on('error', function (err) {
//             console.error('WEBPACK ERROR', err);
//             this.emit('end'); // Don't stop the rest of the task
//         })
// 		.pipe(uglify().on("error", notify.onError()))
// 		.pipe(dest(path.build.js))
//         .pipe(browserSync.stream())
// }

// function watchFiles() {
//     watch([path.watch.html], html);
//     watch([path.watch.css], cssWatch);
//     watch([path.watch.js], jsWatch);
//     watch([path.watch.images], images);
//     watch([path.watch.svg], svg);
//     watch([path.watch.fonts], fonts);
// }

// const build = series(clean, parallel(html, css, js, images, svg, fonts));
// const watchAll = parallel(build, watchFiles, browsersync);

// /* Exports Tasks */
// exports.html = html;
// exports.css = css;
// exports.js = js;
// exports.images = images;
// exports.svg = svg;
// exports.fonts = fonts;
// exports.clean = clean;
// exports.build = build;
// exports.watch = watchAll;
// exports.default = watchAll;