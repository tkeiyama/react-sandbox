const setConfig = require("../../../.storybook/helpers/getStories");

module.exports = {
  ...setConfig("../src/**/*.stories.tsx"),
};
