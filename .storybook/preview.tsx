import {Preview} from "@storybook/react";
// import renderHTML from './render.html';
import DocumentationTemplate from './DocumentationTemplate.mdx';
/* Prevent nowrap when description has detail */
import './css/style.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      // sort: 'requiredFirst',
      hideNoControlsWarning: true,
      expanded: true,
      // matchers: {
      //   color: /(background|color)$/i,
      //   date: /Date$/i,
      // },
      // exclude: ['classes', 'attributes', 'datasets'],
    },
    docs: {
      page: DocumentationTemplate,
      toc: true,
    },
    cssFrameworkSwitcher: {
      frameworks: [
        { id: 'Cirrus-UI', srcPath: './assets/cirrus-ui/cirrus-all.css' },  // ID and css path
        { id: 'Bulma', srcPath: './assets/bulma/bulma.css' },
      ],
      debug: true,
    },
  },
};

export default preview;
