'use strict';

var gulp = require('gulp');
var config = require('./config')();
var plugins = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

//
// Inject CSS, JS, Bower dependencies to annotated HTML files
//

gulp.task('inject', ['styles'], function() {

    function injectStyles() {
        return gulp.src(config.css.files, {
            read: false
        });
    }

    function injectScripts() {
        return gulp.src(config.js.files).pipe(plugins.angularFilesort());
    }

    var injectOptions = {
        ignorePath: [config.webapp, config.serve],
        addRootSlash: false
    };

    return gulp.src([config.webapp + '/*.html'])
        .pipe(plugins.inject(injectStyles(), injectOptions))
        .pipe(plugins.inject(injectScripts(), injectOptions))
        .pipe(wiredep(config.wiredepOptions))
        .pipe(gulp.dest(config.serve));
});