import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import { visualizer } from "rollup-plugin-visualizer";

const isProduction = process.env.NODE_ENV === "production";

const options = {
  input: 'src/index.js',
  external: (name) => {
    const externals = [
      "react",
      "react-dom",
      "@emotion",
      "classnames",
      "prop-types",
      "@radix-ui",
      "@heroicons/react",
    ]
    return externals.some(e => name.includes(e))
  },
  plugins: [
    babel({
      babelHelpers: "bundled"
    }),
    nodeResolve(),
    commonjs(),
    isProduction && uglify(),
    visualizer()
  ],
  output: [{
    exports: "auto",
    dir: 'dist',
    preserveModules: true,
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
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      },
      format: "esm"
    }
  ]
};

module.exports = options
