import babel from "gulp-babel";
import esdoc from "gulp-esdoc";
import mocha from "gulp-mocha";
import gulp from "gulp";

const
	dest = ::gulp.dest,
	src = ::gulp.src,
	task = ::gulp.task,
	watch = ::gulp.watch;

task("build", () => src("src/**/*.js").
	pipe(babel()).
	pipe(dest(".")));

task("doc", () => src("src").
	pipe(esdoc({ destination: "./docs" })));

