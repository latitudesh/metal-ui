import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import { visualizer } from "rollup-plugin-visualizer";
import { peerDependencies, dependencies } from "./package.json";

const isProduction = process.env.NODE_ENV === "production";

const options = {
  input: 'src/index.js',
  external: [
    ...Object.keys(peerDependencies),
    ...Object.keys(dependencies),
    "@emotion/unitless",
    "@emotion/memoize",
    "@emotion/hash",
  ],
  plugins: [
    babel({
      babelHelpers: "bundled"
    }),
    nodeResolve(),
    commonjs(),
    isProduction && uglify(),
    visualizer()
  ],
  output: [
    {
      exports: "auto",
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: 'src',
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      },
      format: "cjs"
    },
    {
      exports: "auto",
      dir: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      },
      format: "esm"
    }
  ]
};

module.exports = options
