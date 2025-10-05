

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mdx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: { appDirectory: true },
  },
  staticDirs: ["../public"],
  core: { builder: "@storybook/builder-webpack5" },
  docs: { autodocs: "tag" },
};
export default config;