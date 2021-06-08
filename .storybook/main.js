module.exports = {
  stories: [
    "../src/stories/*.stories.js",
    "../src/components/*.stories.js",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
  ],
};
