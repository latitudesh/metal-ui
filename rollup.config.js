import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const isProduction = process.env.NODE_ENV === "production";

const files = [
  "Avatar",
  "Badge",
  "Box",
  "Button",
  "Content",
  "DropdownMenu",
  "Feedback",
  "Header",
  "Input",
  "Editable",
  "Label",
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
  "Tooltip",
  "RadioGroup",
  "GlobalStyles"
];

const options = {
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
    isProduction && uglify()
  ],
  output: {
    exports: "auto",
    globals: {
      react: "React",
      "react-dom": "ReactDOM"
    },
    format: "cjs"
  }
};

module.exports = [
  ...files.map((file) => {
    return {
      ...options,
      input: `src/${file}/index.js`,
      output: {
        ...options.output,
        dir: `dist/${file}`
      }
    };
  })
];
