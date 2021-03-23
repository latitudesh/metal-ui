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
};
