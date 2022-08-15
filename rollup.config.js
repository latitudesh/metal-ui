import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import { visualizer } from "rollup-plugin-visualizer";

const isProduction = process.env.NODE_ENV === "production";

const options = {
  input: 'src/index.js',
  external: [
    "react",
    "react-dom",
    "@emotion/styled",
    "@emotion/react",
    "classnames",
    "prop-types",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-hover-card",
    "@radix-ui/react-popover",
    "@radix-ui/react-radio-group",
    "@radix-ui/react-tabs",
    "@radix-ui/react-label",
    "@heroicons/react"
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
