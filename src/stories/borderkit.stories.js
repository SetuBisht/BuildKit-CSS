
export default {
  title: "Utilities/Border", // Grouping Border utilities under a "Utilities" category
  parameters: {
    layout: "centered", // Center the stories in Storybook
  },
};

export const BorderWidthExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Border Width Classes</h2>

    <!-- Border XS -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Width (XS)</h3>
      <div class="border-xs border-solid rounded-md gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>

    <!-- Border MD -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Width (MD)</h3>
      <div class="border-md border-solid rounded-md gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>

    <!-- Border LG -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Width (LG)</h3>
      <div class="border-lg border-solid rounded-md gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>
  </div>
`;

export const BorderRadiusExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Border Radius Classes</h2>

    <!-- Border Radius (None) -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Radius (None)</h3>
      <div class="border-xs border-solid rounded-none gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 0; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>

    <!-- Border Radius (SM) -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Radius (SM)</h3>
      <div class="border-xs border-solid rounded-sm gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 4px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>

    <!-- Border Radius (MD) -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Radius (MD)</h3>
      <div class="border-xs border-solid rounded-md gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>
  </div>
`;

export const BorderStyleExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Border Style Classes</h2>

    <!-- Solid Border -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Style (Solid)</h3>
      <div class="border-xs border-solid rounded-md gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>

    <!-- Dashed Border -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Style (Dashed)</h3>
      <div class="border-xs border-dashed rounded-md gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>

    <!-- Dotted Border -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Style (Dotted)</h3>
      <div class="border-xs border-dotted rounded-md gap-[10px]" style="background-color: #EDF2F7; border-color: #CBD5E0; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>
  </div>
`;

export const BorderColorExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Border Color Classes</h2>

    <!-- Border Color -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Border Color (Custom)</h3>
      <div class="border-xs border-solid rounded-md border-color gap-[10px]" style="background-color: #EDF2F7; border-color: #3182CE; border-radius: 8px; padding: 20px;">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </div>
  </div>
`;
