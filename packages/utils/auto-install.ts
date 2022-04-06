/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-25 19:08:18
 * @LastEditTime: 2022-03-25 19:08:18
 */
import type { App, Plugin } from "vue";
export type SFC_Plugin<T> = T & Plugin;
export const AutoInstall = <T>(component: T) => {
  (component as SFC_Plugin<T>).install = (app: App) => {
    app.component((component as any).name, component);
  };
  return component as SFC_Plugin<T>;
};
