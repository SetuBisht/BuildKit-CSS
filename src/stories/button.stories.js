export default {
  title: "Components/Buttons",
  parameters: {
    layout: "centered",
  },
};

export const ButtonVariants = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-primary">Primary (btn btn-primary)</button>
    <button class="btn btn-secondary">Secondary (btn btn-secondary)</button>
    <button class="btn btn-success">Success (btn btn-success)</button>
    <button class="btn btn-danger">Danger (btn btn-danger)</button>
    <button class="btn btn-warning">Warning (btn btn-warning)</button>
    <button class="btn btn-info">Info (btn btn-info)</button>
  </div>
`;

export const ButtonOutlineVariants = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-outline-primary">Primary (btn-outline-primary)</button>
    <button class="btn btn-outline-secondary">Secondary (btn-outline-secondary)</button>
    <button class="btn btn-outline-success">Success (btn-outline-success)</button>
    <button class="btn btn-outline-danger">Danger (btn-outline-danger)</button>
    <button class="btn btn-outline-warning">Warning (btn-outline-warning)</button>
    <button class="btn btn-outline-info">Info (btn-outline-info)</button>
  </div>
`;

export const ButtonSizes = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-sm btn-primary">Small (btn-sm)</button>
    <button class="btn btn-primary">Default </button>
    <button class="btn btn-lg btn-primary">Large (btn-lg)</button>
  </div>
`;

export const ButtonRounded = () => `
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <button class="btn btn-primary btn-rounded">Rounded (btn-rounded)</button>
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
