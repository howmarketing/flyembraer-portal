module.exports = {
  stories: ["../src/**/stories.tsx", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "storybook-addon-next"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/`)
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
