import "../../dist/buildKit.css"; // Ensure this imports your compiled CSS
import "../../dist/main.js"; // If you have JS interactions, import them

export default {
  title: "Components/Buttons",
  parameters: {
    layout: "centered",
  },
};

export const ButtonVariants = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-info">Info</button>
  </div>
`;

export const ButtonOutlineVariants = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-outline-primary">Primary</button>
    <button class="btn btn-outline-secondary">Secondary</button>
    <button class="btn btn-outline-success">Success</button>
    <button class="btn btn-outline-danger">Danger</button>
    <button class="btn btn-outline-warning">Warning</button>
    <button class="btn btn-outline-info">Info</button>
  </div>
`;

export const ButtonSizes = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-sm btn-primary">Small</button>
    <button class="btn btn-primary">Default</button>
    <button class="btn btn-lg btn-primary">Large</button>
  </div>
`;

export const ButtonRounded = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-primary btn-rounded">Rounded</button>
    <button class="btn btn-secondary btn-rounded">Rounded</button>
  </div>
`;

export const ButtonHoverEffects = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-primary">Hover Me</button>
    <button class="btn btn-outline-primary">Hover Me</button>
  </div>
`;

export const ButtonLoading = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-primary btn-loading p-[50px]"></button>
    <button class="btn btn-secondary btn-loading p-[50px]"></button>
  </div>
`;
