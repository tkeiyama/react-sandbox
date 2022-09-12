module.exports = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-themes",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
};