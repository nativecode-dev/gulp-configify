const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()
const $ = require('./src')(__dirname, 'package.json')

gulp.task('build', ['build:js'])

gulp.task('build:js', () => {
  return gulp.src($.sources.js)
    .pipe(plugins.debug($.debug.js))
    .pipe(plugins.babel($.plugins.babel))
    .pipe(gulp.dest($.destination.lib))
})

gulp.task('default', ['build'])
