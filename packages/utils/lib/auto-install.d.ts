import type { Plugin } from "vue";
export declare type SFC_Plugin<T> = T & Plugin;
export declare const AutoInstall: <T>(component: T) => SFC_Plugin<T>;
