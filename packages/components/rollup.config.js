import multiInput from "rollup-plugin-multi-input";
const buildTheme = {
  input: ["./**/style/index.ts"],
  output: {
    dir: "dist/es/",
    plugins: [multiInput()],
    assetFileNames: "[name].css",
  },
};

export default [buildTheme];
