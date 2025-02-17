"use strict";(self.webpackChunkbuildkit_css=self.webpackChunkbuildkit_css||[]).push([[918],{"./src/stories/theme.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeColors:()=>ThemeColors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Utilities/Theme Colors"},ThemeColors=()=>'\n  <style>\n    /* Basic styling for the demo */\n    body {\n      font-family: Arial, sans-serif;\n      padding: 20px;\n    }\n    .color-swatch {\n      display: inline-block;\n      width: 150px;\n      height: 100px;\n      margin: 10px;\n      padding: 10px;\n      text-align: center;\n      vertical-align: middle;\n      line-height: 80px;\n      border: 2px solid transparent;\n      border-radius: 4px;\n    }\n    .color-swatch.border {\n      border-style: solid;\n    }\n    .toggle-button {\n      padding: 8px 16px;\n      cursor: pointer;\n      background-color: #007bff;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      margin-bottom: 20px;\n    }\n    h2, h3 {\n      margin-top: 20px;\n    }\n    .demo-section {\n      margin-bottom: 40px;\n    }\n  </style>\n\n  \x3c!-- Toggle button to switch themes --\x3e\n  <button class="toggle-button" id="toggleDarkMode">Toggle Dark Mode</button>\n\n  <h2>Theme Colors Demo</h2>\n\n  <div class="demo-section">\n    <h3>Text Colors</h3>\n    <div>\n      <p class="text-primary">.text-primary</p>\n      <p class="text-secondary">.text-secondary</p>\n      <p class="text-accent">.text-accent</p>\n      <p class="text-success">.text-success</p>\n      <p class="text-warning">.text-warning</p>\n      <p class="text-danger">.text-danger</p>\n      <p class="text-info">.text-info</p>\n      <p class="text-light" >.text-light</p>\n      <p class="text-dark">.text-dark</p>\n      <p class="text-neutral">.text-neutral</p>\n    </div>\n  </div>\n\n  <div class="demo-section">\n    <h3>Background Colors</h3>\n    <div>\n      <div class="bg-primary color-swatch">.bg-primary</div>\n      <div class="bg-secondary color-swatch">.bg-secondary</div>\n      <div class="bg-accent color-swatch">.bg-accent</div>\n      <div class="bg-success color-swatch">.bg-success</div>\n      <div class="bg-warning color-swatch">.bg-warning</div>\n      <div class="bg-danger color-swatch">.bg-danger</div>\n      <div class="bg-info color-swatch">.bg-info</div>\n      <div class="bg-light color-swatch">.bg-light</div>\n      <div class="bg-dark color-swatch">.bg-dark</div>\n      <div class="bg-neutral color-swatch">.bg-neutral</div>\n    </div>\n  </div>\n\n\n  <script>\n    // Toggle dark mode by toggling the data-theme attribute on document.body\n    document.getElementById(\'toggleDarkMode\').addEventListener(\'click\', () => {\n      if (document.body.getAttribute(\'data-theme\') === \'dark\') {\n        document.body.removeAttribute(\'data-theme\');\n      } else {\n        document.body.setAttribute(\'data-theme\', \'dark\');\n      }\n    });\n  <\/script>\n',__namedExportsOrder=["ThemeColors"];ThemeColors.parameters={...ThemeColors.parameters,docs:{...ThemeColors.parameters?.docs,source:{originalSource:'() => `\n  <style>\n    /* Basic styling for the demo */\n    body {\n      font-family: Arial, sans-serif;\n      padding: 20px;\n    }\n    .color-swatch {\n      display: inline-block;\n      width: 150px;\n      height: 100px;\n      margin: 10px;\n      padding: 10px;\n      text-align: center;\n      vertical-align: middle;\n      line-height: 80px;\n      border: 2px solid transparent;\n      border-radius: 4px;\n    }\n    .color-swatch.border {\n      border-style: solid;\n    }\n    .toggle-button {\n      padding: 8px 16px;\n      cursor: pointer;\n      background-color: #007bff;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      margin-bottom: 20px;\n    }\n    h2, h3 {\n      margin-top: 20px;\n    }\n    .demo-section {\n      margin-bottom: 40px;\n    }\n  </style>\n\n  \x3c!-- Toggle button to switch themes --\x3e\n  <button class="toggle-button" id="toggleDarkMode">Toggle Dark Mode</button>\n\n  <h2>Theme Colors Demo</h2>\n\n  <div class="demo-section">\n    <h3>Text Colors</h3>\n    <div>\n      <p class="text-primary">.text-primary</p>\n      <p class="text-secondary">.text-secondary</p>\n      <p class="text-accent">.text-accent</p>\n      <p class="text-success">.text-success</p>\n      <p class="text-warning">.text-warning</p>\n      <p class="text-danger">.text-danger</p>\n      <p class="text-info">.text-info</p>\n      <p class="text-light" >.text-light</p>\n      <p class="text-dark">.text-dark</p>\n      <p class="text-neutral">.text-neutral</p>\n    </div>\n  </div>\n\n  <div class="demo-section">\n    <h3>Background Colors</h3>\n    <div>\n      <div class="bg-primary color-swatch">.bg-primary</div>\n      <div class="bg-secondary color-swatch">.bg-secondary</div>\n      <div class="bg-accent color-swatch">.bg-accent</div>\n      <div class="bg-success color-swatch">.bg-success</div>\n      <div class="bg-warning color-swatch">.bg-warning</div>\n      <div class="bg-danger color-swatch">.bg-danger</div>\n      <div class="bg-info color-swatch">.bg-info</div>\n      <div class="bg-light color-swatch">.bg-light</div>\n      <div class="bg-dark color-swatch">.bg-dark</div>\n      <div class="bg-neutral color-swatch">.bg-neutral</div>\n    </div>\n  </div>\n\n\n  <script>\n    // Toggle dark mode by toggling the data-theme attribute on document.body\n    document.getElementById(\'toggleDarkMode\').addEventListener(\'click\', () => {\n      if (document.body.getAttribute(\'data-theme\') === \'dark\') {\n        document.body.removeAttribute(\'data-theme\');\n      } else {\n        document.body.setAttribute(\'data-theme\', \'dark\');\n      }\n    });\n  <\/script>\n`',...ThemeColors.parameters?.docs?.source}}}}}]);