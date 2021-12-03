import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const isProduction = process.env.NODE_ENV === "production";

const files = [
  "AlgoliaSearch",
  "Avatar",
  "Badge",
  "Box",
  "Button",
  "Content",
  "DropdownMenu",
  "Feedback",
  "Header",
  "Input",
  "Select",
  "Sidesheet",
  "Skeleton",
  "SpinningDots",
  "Table",
  "Tabs",
  "Textarea",
  "Toast",
  "Typography", // This contains Text, Heading, UnorderedList and ListItem
  "Text",
  "Heading",
  "UnorderedList",
  "ListItem",
];

const options = {
  external: [
    "react",
    "react-dom",
    "@emotion/styled",
    "@emotion/react",
    "classnames",
    "prop-types",
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
    }),
    nodeResolve(),
    commonjs(),
    isProduction && uglify(),
  ],
  output: {
    exports: "auto",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    format: "cjs",
  },
};

module.exports = [
  ...files.map((file) => {
    return {
      ...options,
      input: `src/${file}/index.js`,
      output: {
        ...options.output,
        dir: `dist/${file}`,
      },
    };
  }),
];
