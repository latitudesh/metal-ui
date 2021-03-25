const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-actions/register",
  ],
  webpackFinal: async (config) => {
    // TODO: Remove when Storybook adds support for Emotion 11. Fix inspired from here - https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        }
      }
    };
  }
};
