import "../../dist/buildKit.css"; // Ensure this imports your SCSS output CSS
import "../../dist/main.js"; // If you have JS interactions, import them

export default {
  title: "Utilities/Typography", // Grouping Typography utilities under a "Utilities" category
  parameters: {
    layout: "centered", // Center the stories in Storybook
  },
};

export const FontSizeExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Font Size Classes</h2>

    <!-- Font Size XS -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Font Size (XS)</h3>
      <div class="text-xs" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This is an example of extra small font size (12px).</p>
      </div>
    </div>

    <!-- Font Size MD -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Font Size (MD)</h3>
      <div class="text-md" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This is an example of medium font size (16px).</p>
      </div>
    </div>

    <!-- Font Size XL -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Font Size (XL)</h3>
      <div class="text-xl" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This is an example of extra large font size (24px).</p>
      </div>
    </div>
  </div>
`;

export const FontWeightExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Font Weight Classes</h2>

    <!-- Font Weight Light -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Font Weight (Light)</h3>
      <div class="font-light" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This is an example of light font weight (300).</p>
      </div>
    </div>

    <!-- Font Weight Normal -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Font Weight (Normal)</h3>
      <div class="font-normal" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This is an example of normal font weight (400).</p>
      </div>
    </div>

    <!-- Font Weight Bold -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Font Weight (Bold)</h3>
      <div class="font-bold" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This is an example of bold font weight (700).</p>
      </div>
    </div>
  </div>
`;

// export const TextAlignmentExamples = () => `
//   <div style="text-align: center; margin-bottom: 30px;">
//     <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Text Alignment</h2>

//     <!-- Text Left -->
//     <div style="margin-bottom: 20px;">
//       <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Text Alignment (Left)</h3>
//       <div class="text-left" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
//         <p>This text is aligned to the left.</p>
//       </div>
//     </div>

//     <!-- Text Center -->
//     <div style="margin-bottom: 20px;">
//       <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Text Alignment (Center)</h3>
//       <div class="text-center" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
//         <p>This text is centered.</p>
//       </div>
//     </div>

//     <!-- Text Right -->
//     <div style="margin-bottom: 20px;">
//       <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Text Alignment (Right)</h3>
//       <div class="text-right" style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
//         <p>This text is aligned to the right.</p>
//       </div>
//     </div>
//   </div>
// `;

export const CustomFontExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Text Alignment</h2>

    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Custom Font Size</h3>
      <div class="font-s-[10px]"  style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This font size is 10px.</p>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Custom Font Weight</h3>
      <div class="font-w-[100px]"  style="background-color: #EDF2F7; padding: 20px; border-radius: 8px;">
        <p>This font weight is 100px.</p>
      </div>
    </div>
    </div>
  </div>
`;
