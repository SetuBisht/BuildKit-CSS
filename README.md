# BuildKit-CSS

BuildKit-CSS is a lightweight, utility-first CSS library designed for rapid UI development. It provides a set of utility classes, theming support, and prebuilt components like accordions, dialogs, cards, buttons, grids, and more. This library works with vanilla HTML, React, and Next.js.

## Features

- **Utility-First Approach** – Similar to Tailwind CSS, with customizable spacing, typography, flex, and grid utilities.
- **Prebuilt Components** – Includes accordion, dialog, card, buttons.
- **Theming Support** – Customizable via SCSS variables and `buildkit.config.js`.
- **Responsive Breakpoints** – Mobile-first design with predefined breakpoints.
- **Accessibility Focused** – ARIA roles, keyboard navigation, and high contrast support.
- **Lightweight & Customizable** – Works out of the box or can be tailored to project needs.

## Installation

```sh
npm install buildkit-css
```

After installation, import the CSS and JavaScript files from the <code>dist</code> folder:</p>

```sh
   import 'buildkit-css/dist/buildKit.css';
   import 'buildkit-css/dist/main.js';
```

Or include it via CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/buildkit-css@latest/dist/buildKit.css"
/>
<script href="https://cdn.jsdelivr.net/npm/buildkit-css@latest/dist/main.js" />
```

## Usage

### Using Utility Classes

```html
<div
  class="flex justify-center p-[4px] bg-primary text-white font-s-[10px] font-w-[50px]"
>
  Welcome to BuildKit-CSS
</div>
```

### Using Components

#### Accordion

```html
<div class="accordion">
  <div class="accordion-item">
    <input type="checkbox" id="acc1" class="accordion-toggle" />
    <label class="accordion-header" for="acc1">Section 1</label>
    <div class="accordion-content">
      <p>This is the content of section 1.</p>
    </div>
  </div>
  <div class="accordion-item">
    <input type="checkbox" id="acc2" class="accordion-toggle" />
    <label class="accordion-header" for="acc2">Section 2</label>
    <div class="accordion-content">
      <p>This is the content of section 2.</p>
    </div>
  </div>
  <div class="accordion-item">
    <input type="checkbox" id="acc3" class="accordion-toggle" />
    <label class="accordion-header" for="acc3">Section 3</label>
    <div class="accordion-content">
      <p>This is the content of section 3.</p>
    </div>
  </div>
</div>
```

## Theming

BuildKit-CSS allows customization via SCSS variables or a config file:

```scss
$primary-color: #007bff;
$border-radius: 8px;
```

OR using `buildkit.config.js`:

```js
module.exports = {
  spacingValues: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
  },
};
```

## Storybook

To explore components visually, run:

```sh
npm run storybook
```

Explore the documentation here: BuildKit-CSS Docs(https://setubisht.github.io/BuildKit-CSS/?path=/docs/buildkit-css--docs)
