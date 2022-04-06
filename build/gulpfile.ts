/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-28 09:51:41
 * @LastEditTime: 2022-03-28 10:23:10
 */
import { series, parallel } from "gulp";
import { runTaskName, runCmd } from "./utils";

//串行
export default series(
  //清空dist
  runTaskName("clean", async () => {
    runCmd("rm -rf ./dist");
  }),
  //打包样式
  runTaskName("buildPackages", async () => {
    runCmd("pnpm run --filter ./packages --parallel build");
  })
  //打包工具库

  //打包所有组件库

  //打包每个组件

  //生成组件库

  //发布
);
