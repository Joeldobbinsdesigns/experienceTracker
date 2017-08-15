/*
 Instructions for using Node.js npm and running Gulp:
 1. In cmd, cd to the project root directory (or shift + right click and select open Command Prompt here) and run: npm install
 This will create the node_modules folder from the dependancies stated in package.json
 Note: to add dependancies in the future, when installing just add --save at the end, which will automatically add it to the package.json as a dependency. e.g. npm install gulp-rename --save
 2. In cmd, run: gulp
 This will trigger the default task in this gulpfile.js, which will continually watch the folders for any changes and trigger the appropriate task(s)
 */

//import the dependancies
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');

//generate css and min.css files
gulp.task('compressSass', function () {
    //generate css from sass
    gulp.src('scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('css'));

    //generate minified css from sass
    //do it from the sass again - in case the css hasn't been generated yet - to avoid the double save issue
    gulp.src('scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

//generate minified js from js
gulp.task('compressJs', function () {
    gulp.src('lib/**/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'))
})

//continually watches specific folders for changes and triggers the appropriate task(s)
gulp.task('default', function () {
    gulp.watch('scss/**/*.scss', ['compressSass']);
    gulp.watch('lib/**/*.js', ['compressJs']);
});

//cleans dist folder
gulp.task('clean', function() {
return gulp.src('dist/', {read: false})
    .pipe(clean())
});

//publish only the files needed to upload to Filezilla into the dist folder
//should also make the dist folder in the gitignore file as you don't want to commit duplicate files into your repo
gulp.task('publish', function() {
    gulp.src(['./*.php', './*.html', './*.txt', './*.htaccess', './*.xml', './*.config'])
        .pipe(gulp.dest('dist/'))
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
    gulp.src('img/**/*')
        .pipe(gulp.dest('dist/img/'))
    gulp.src('favicon/**/*')
        .pipe(gulp.dest('dist/favicon/'))
    gulp.src('js/**/*.min.js')
        .pipe(gulp.dest('dist/js/'))
    gulp.src(['downloads/*.doc', 'downloads/*.pdf'])
        .pipe(gulp.dest('dist/downloads/'))
    gulp.src('php/**/*')
        .pipe(gulp.dest('dist/php/'))
    gulp.src(['css/*.min.css', 'css/*.map'])
        .pipe(gulp.dest('dist/css/'))
});