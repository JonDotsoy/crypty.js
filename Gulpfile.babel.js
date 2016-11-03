import babel from "gulp-babel";
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

