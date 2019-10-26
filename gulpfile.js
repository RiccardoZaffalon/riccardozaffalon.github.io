const { src, dest, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const htmlmin = require('gulp-htmlmin');

function serve () {
    browserSync.init({
        server: "./"
    });

    watch("./src/*.html", html);
    watch("./src/scss/*.scss", style);
    watch("./src/js/*.js", scripts);
    watch("./dist/*.html").on('change', browserSync.reload);
}
function html () {
    return src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, minifyJS: true }))
        .pipe(dest('./'));
}

function style () {
    return src("./src/scss/*.scss")
        .pipe(sass({outputStyle: 'compressed', includePaths: ['./node_modules/aos/src/sass']}))
        .pipe(dest("./dist/css"))
        .pipe(browserSync.stream());
}

function scripts () {
    return src("./src/js/*.js")
        .pipe(webpack({
            output: {
                filename: 'index.js',
            },
            mode: 'production'
        }))
        .pipe(dest("./dist/js"))
        .pipe(browserSync.stream());
}

exports.html = html;
exports.style = style;
exports.scripts = scripts;
exports.build = parallel(html, style, scripts);
exports.default = serve;