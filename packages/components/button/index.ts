/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-25 18:57:52
 * @LastEditTime: 2022-03-28 09:39:24
 */
import Button from "./src/index.vue";
import { AutoInstall } from "@bench-plus/utils/auto-install";
//支持default和结构
export const BButton = AutoInstall(Button);
export default BButton;
