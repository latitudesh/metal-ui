import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

const files = [
    "AlgoliaSearch",
    // "Avatar",
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
    "Typography",
]
module.exports = files.map(file => {
    return {
        input: `src/${file}/index.js`,
        external: [
            "react",
            "react-dom",
            "@emotion/styled",
            "@emotion/react",
            "@radix-ui/react-dropdown-menu",
            "classnames",
            "prop-types",
        ],
        plugins: [
            babel({
                babelHelpers: 'bundled'
            }),
            nodeResolve(),
            commonjs(),
        ],
        output: {
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM'
            },
            dir: `dist/${file}`,
            format: 'cjs',
        }
    }
})
