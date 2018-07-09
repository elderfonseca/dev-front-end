var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssmin = require ('gulp-clean-css')

/*
 * Variaveis
 */
// Arquivo Sass
var scssFiles = './src/sass/*.scss';

// Destino do CSS
var cssDest = './src/css';

// Opções para desenvolvimento
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Opções para produção
var sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tarefas
 */
// Tarefa 'sassdev' - Roda com o comando 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Tarefa 'sassprod' - Roda com o comando 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(cssmin(''))
	.pipe(rename({
		suffix:'.min'
	}))
    .pipe(gulp.dest(cssDest));
});

// Tarefa 'watch' - Roda com o comando 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});

// Tarefa Default - Roda com o comando 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);