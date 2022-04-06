import path from "path";
import { distPath } from "./path";
export const modules = ["esm", "cjs"] as const;
export type Module = typeof modules[number];
export interface BuildInfo {
  module: "ESNext" | "CommonJS";
  format: "esm" | "cjs";
  output: {
    /** e.g: `es` */
    name: string;
    /** e.g: `dist/element-plus/es` */
    path: string;
  };

  bundle: {
    /** e.g: `element-plus/es` */
    path: string;
  };
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: "ESNext",
    format: "esm",
    output: {
      name: "es",
      path: path.resolve(distPath, "es"),
    },
    bundle: {
      path: "bench-plus/es",
    },
  },
  cjs: {
    module: "CommonJS",
    format: "cjs",
    output: {
      name: "lib",
      path: path.resolve(distPath, "lib"),
    },
    bundle: {
      path: "bench-plus/lib",
    },
  },
};
