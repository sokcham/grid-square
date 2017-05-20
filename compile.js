var fs = require("fs")
var browserify = require('browserify')
var babelify = require("babelify");
var vueify = require('vueify')

browserify('./js/app.js')
  .transform(babelify)
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("dist/bundle.js"))