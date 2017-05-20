//const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


Elixir(mix => {
  /*mix.webpack([
    'js/app.js'
  ], 'public/js/app.js', './', {devtool: '#eval'});
  mix.webpack([
    'js/foo.js'
  ], 'dist/bundle.js', './', {devtool: 'source-map'});*/
  mix.sass([
    'css/app.scss'
  ], 'public/css', './');
});
