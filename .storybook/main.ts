import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: [
    { from: '../src/stories/assets/', to: '/assets'},
    { from: '../node_modules/cirrus-ui/dist/', to: '/assets/cirrus-ui'},
    { from: '../node_modules/bulma/css/', to: '/assets/bulma'},
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "storybook-addon-deep-controls",
    '@hiroyoshi-mori/storybook-css-framework-switcher',
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  managerHead: (head) => `
    ${head}
    <style>
      span.li {
          display: list-item;
          list-style-type: disc;
          margin-left: 2em;
          text-align: -webkit-match-parent;
      }
    </style>
 `,
};
export default config;
