"use strict";
var gulp = require("gulp");
var gulpLess = require("gulp-less");
var gulpConcat = require("gulp-concat");
var gulpSourceMaps = require("gulp-sourcemaps");


gulp.task("default", function() {
    return gulp.src("styles/*.less", {cwd: "src"})
        .pipe(gulpConcat("bundle.less"))
         // Removing gulpSourceMaps seems to work just fine
        .pipe(gulpSourceMaps.init())
        .pipe(gulpLess())
        .pipe(gulpSourceMaps.write("./dist"))
        .pipe(gulp.dest("styles", {cwd: "dist"}));
});
