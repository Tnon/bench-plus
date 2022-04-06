/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-28 10:19:33
 * @LastEditTime: 2022-03-28 11:02:06
 */
//打包样式
import { series, src, dest } from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import path from "path";
//打包scss 并输出
const compile = () => {
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest("./dist/css"));
};
//拷贝fonts
const copyFile = () => {
  return src(path.resolve(__dirname, "src/fonts/**"))
    .pipe(cleanCss())
    .pipe(dest("./dist/fonts"));
};

//拷贝到外部
const copyAll = () => {
  return src(path.relative(__dirname, "./dist/**")).pipe(
    dest(path.resolve(__dirname, "../../dist/theme"))
  );
};
export default series(compile, copyFile, copyAll);
