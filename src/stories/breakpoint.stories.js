

export default {
  title: "Utilities/Responsive",
};

export const ResponsiveDisplay = () => `
  <style>
    .demo-container {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 16px 0;
    }
    .box {
      background: #e2e8f0;
      padding: 16px;
      margin: 8px;
      text-align: center;
      border: 1px solid #cbd5e0;
    }
    h3 {
      margin-bottom: 8px;
    }
  </style>

  <h2>Responsive Display Utilities</h2>
  
  <div class="demo-container">
    <h3>Default (No breakpoint)</h3>
    <p class="display-none box">.display-none (hidden)</p>
  </div>
  
  <div class="demo-container">
    <h3>Small (≥576px)</h3>
    <p class="sm:display-none box">.sm:display-none (hidden on small and up)</p>
    <p class="sm:display-block box">.sm:display-block (block on small and up)</p>
  </div>
  
  <div class="demo-container">
    <h3>Medium (≥768px)</h3>
    <p class="md:display-flex box">.md:display-flex (flex on medium and up)</p>
  </div>
  
  <div class="demo-container">
    <h3>Large (≥992px)</h3>
    <p class="lg:display-grid box">.lg:display-grid (grid on large and up)</p>
  </div>
`;

export const ResponsiveVisibility = () => `
  <style>
    .demo-container {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 16px 0;
    }
    .box {
      background: #e2e8f0;
      padding: 16px;
      margin: 8px;
      text-align: center;
      border: 1px solid #cbd5e0;
    }
    h3 {
      margin-bottom: 8px;
    }
  </style>

  <h2>Responsive Visibility Utilities</h2>
  
  <div class="demo-container">
    <h3>Small (≥576px)</h3>
    <p class="sm:hidden box">.sm:hidden (hidden on small and up)</p>
    <p class="sm:visible box">.sm:visible (visible on small and up)</p>
  </div>
  
  <div class="demo-container">
    <h3>Medium (≥768px)</h3>
    <p class="md:hidden box">.md:hidden (hidden on medium and up)</p>
    <p class="md:visible box">.md:visible (visible on medium and up)</p>
  </div>
`;

export const ResponsiveTextAlignment = () => `
  <style>
    .demo-container {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 16px 0;
    }
    .box {
      background: #e2e8f0;
      padding: 16px;
      margin: 8px;
      border: 1px solid #cbd5e0;
    }
    h3 {
      margin-bottom: 8px;
    }
  </style>

  <h2>Responsive Text Alignment Utilities</h2>
  
  <div class="demo-container">
    <h3>Small (≥576px)</h3>
    <p class="sm:text-left box">.sm:text-left (text left on small and up)</p>
  </div>
  
  <div class="demo-container">
    <h3>Medium (≥768px)</h3>
    <p class="md:text-center box">.md:text-center (text center on medium and up)</p>
  </div>
  
  <div class="demo-container">
    <h3>Large (≥992px)</h3>
    <p class="lg:text-right box">.lg:text-right (text right on large and up)</p>
  </div>
`;
