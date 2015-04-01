"use strict";
var gulp = require("gulp");
var gulpLess = require("gulp-less");
var gulpConcat = require("gulp-concat");
var gulpSourceMaps = require("gulp-sourcemaps");


gulp.task("default", function() {
    return gulp.src("styles/*.less", {cwd: "src"})
        .pipe(gulpSourceMaps.init())
        .pipe(gulpLess())
        .pipe(gulpConcat("bundle.less"))
        .pipe(gulpSourceMaps.write("./"))
        .pipe(gulp.dest("styles", {cwd: "dist"}));
});
