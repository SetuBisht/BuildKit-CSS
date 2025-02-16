// Import global styles and scripts for Storybook
import "../dist/buildKit.css"; // Ensure CSS is properly applied
import "../dist/main.js"; // Ensure JS is loaded for components

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" }, // Ensure event handlers work
  },
};

export default preview;
