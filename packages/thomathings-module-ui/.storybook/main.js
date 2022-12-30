const setConfig = require("../../../.storybook/getStories");

module.exports = {
  ...setConfig("../src/**/*.stories.tsx"),
};
