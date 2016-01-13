/***
 *                          __
 *        ____  ____ ______/ /______ _____ ____  _____
 *       / __ \/ __ `/ ___/ //_/ __ `/ __ `/ _ \/ ___/
 *      / /_/ / /_/ / /__/ ,< / /_/ / /_/ /  __(__  )
 *     / .___/\__,_/\___/_/|_|\__,_/\__, /\___/____/
 *    /_/                          /____/
 */

// Core
var gulp = require('gulp');

// Utilities
var rename = require("gulp-rename");
var plumber = require('gulp-plumber');

// CSS
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

/***
 *        __          _ __    __   __             __
 *       / /_  __  __(_) /___/ /  / /_____ ______/ /_______
 *      / __ \/ / / / / / __  /  / __/ __ `/ ___/ //_/ ___/
 *     / /_/ / /_/ / / / /_/ /  / /_/ /_/ (__  ) ,< (__  )
 *    /_.___/\__,_/_/_/\__,_/   \__/\__,_/____/_/|_/____/
 *
 */

gulp.task('default', function() {

    gulp.src('src/**/[^_]*.{css,scss,sass}')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 version', '> 1%'],
            cascade: true,
            add: true,
            remove: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist'))

});