import gulp from "gulp";
import del from "del";
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

sass.compiler = require("node-sass");

const routes = {
  css: {
    // default
    // watch: "src/scss/*",
    // src: "src/scss/styles.scss",
    // dest: "dest/css"

    // projects
    watch: "src/scss/projects/4-1bestHorrorScenes/*",
    src: "src/scss/projects/4-1bestHorrorScenes/styles.scss",
    dest: "dest/css/projects/4-1bestHorrorScenes"
  }
};

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace"
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dest));

const watch = () => {
  gulp.watch(routes.css.watch, styles);
};

// const clean = () => del(["dest/"]); // default

const clean = () => del(["dest/css/projects/4-1bestHorrorScenes"]); // for projects

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, assets, live]);
