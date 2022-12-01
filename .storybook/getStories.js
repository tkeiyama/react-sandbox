const setStoryPath = (path) => {
  return {
    stories: [path],
    addons: [
      "@storybook/addon-essentials",
      {
        name: "storybook-addon-turbo-build",
        options: {
          optimizationLevel: 2,
        },
      },
      {
        name: "@storybook/addon-postcss",
        options: {
          postcssLoaderOptions: {
            implementation: require("postcss"),
          },
        },
      },
    ],
    framework: "@storybook/react",
    core: {
      builder: {
        name: "webpack5",
        options: {
          lazyCompilation: true,
          fsCache: true,
        },
      },
    },
    features: {
      storyStoreV7: true,
      buildStoriesJson: true,
    },
  };
};

module.exports = setStoryPath;
