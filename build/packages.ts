/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-28 11:08:50
 * @LastEditTime: 2022-03-28 11:12:06
 */
import path from "path";
import { series, parallel, src, dest } from "gulp";
import { buildConfig } from "./utils/build-config";
import { rootPath, distPath } from "./utils/path";
import ts from "gulp-typescript";
import { runTaskName } from "./utils";
export const buildPackages = (dirname: string, name: string) => {
  //rollup打包，ts=>js
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name);

    return series(
      runTaskName(`build${dirname}`, () => {
        //路径
        const tsConfig = path.resolve(rootPath, "tsconfig.json");
        const inputs = ["**/*.ts", "!gulpfile.ts", "!node_modules"];
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true, //需要生成配置未见
              strict: false,
              module: config.module,
            })()
          )
          .pipe(dest(output));
      }),
      runTaskName(`copy${dirname}`, () => {
        return src(`${output}/**`).pipe(
          dest(path.resolve(distPath, config.output.name, name))
        );
      })
    );
  });
  return parallel(...tasks);
};
