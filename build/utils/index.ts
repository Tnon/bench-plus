/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-28 10:01:57
 * @LastEditTime: 2022-03-28 10:13:10
 */
//执行任务
import { spawn } from "child_process";
import { rootPath } from "./path";
export const runTaskName = <T>(taskName: string, fn: T) =>
  Object.assign(fn, { taskName });
//跑脚本
export const runCmd = async (command: string) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(" ");
    const process = spawn(cmd, args, {
      cwd: rootPath, //在根目录执行
      stdio: "inherit", //子进程的输出 共享到父进程
      shell: true, //默认 linux支持，开启windows支持
    });
    process.on("close", resolve);
  });
};
