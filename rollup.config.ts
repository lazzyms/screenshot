import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "umd",
    name: "Screenshot-with-selection",
  },
  plugins: [typescript(), commonjs(), resolve()],
};
