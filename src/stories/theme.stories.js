
export default {
  title: "Utilities/Theme Colors",
};

export const ThemeColors = () => `
  <style>
    /* Basic styling for the demo */
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .color-swatch {
      display: inline-block;
      width: 150px;
      height: 100px;
      margin: 10px;
      padding: 10px;
      text-align: center;
      vertical-align: middle;
      line-height: 80px;
      border: 2px solid transparent;
      border-radius: 4px;
    }
    .color-swatch.border {
      border-style: solid;
    }
    .toggle-button {
      padding: 8px 16px;
      cursor: pointer;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    h2, h3 {
      margin-top: 20px;
    }
    .demo-section {
      margin-bottom: 40px;
    }
  </style>

  <!-- Toggle button to switch themes -->
  <button class="toggle-button" id="toggleDarkMode">Toggle Dark Mode</button>

  <h2>Theme Colors Demo</h2>

  <div class="demo-section">
    <h3>Text Colors</h3>
    <div>
      <p class="text-primary">.text-primary</p>
      <p class="text-secondary">.text-secondary</p>
      <p class="text-accent">.text-accent</p>
      <p class="text-success">.text-success</p>
      <p class="text-warning">.text-warning</p>
      <p class="text-danger">.text-danger</p>
      <p class="text-info">.text-info</p>
      <p class="text-light" >.text-light</p>
      <p class="text-dark">.text-dark</p>
      <p class="text-neutral">.text-neutral</p>
    </div>
  </div>

  <div class="demo-section">
    <h3>Background Colors</h3>
    <div>
      <div class="bg-primary color-swatch">.bg-primary</div>
      <div class="bg-secondary color-swatch">.bg-secondary</div>
      <div class="bg-accent color-swatch">.bg-accent</div>
      <div class="bg-success color-swatch">.bg-success</div>
      <div class="bg-warning color-swatch">.bg-warning</div>
      <div class="bg-danger color-swatch">.bg-danger</div>
      <div class="bg-info color-swatch">.bg-info</div>
      <div class="bg-light color-swatch">.bg-light</div>
      <div class="bg-dark color-swatch">.bg-dark</div>
      <div class="bg-neutral color-swatch">.bg-neutral</div>
    </div>
  </div>


  <script>
    // Toggle dark mode by toggling the data-theme attribute on document.body
    document.getElementById('toggleDarkMode').addEventListener('click', () => {
      if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
      } else {
        document.body.setAttribute('data-theme', 'dark');
      }
    });
  </script>
`;
