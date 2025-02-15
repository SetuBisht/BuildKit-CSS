import "../../dist/buildKit.css";
import "../../dist/main.js";

export default {
  title: "Utilities/Spacing",
};

export const SpacingExamples = () => `
  <style>
    .bg-gray-300 { background-color: #e2e8f0; }
    .box {
      width: 120px;
      height: 60px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 14px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    .box:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    .spacing-container {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: start;
    }
    .heading {
      font-size: 22px;
      margin-bottom: 15px;
      color: #333;
      font-weight: bold;
    }
    .description {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }
    .section {
      margin-bottom: 40px;
    }
    .definition {
      font-size: 14px;
      color: #999;
      margin-top: 10px;
      font-style: italic;
    }
  </style>

  <div class="section">
    <h3 class="heading">Predefined Margin and Padding Spacing Classes</h3>
    <p class="description">These are the basic margin and padding classes, available in different sizes from xs to xxl, helping you control spacing across your layout.</p>
    <p class="definition">Use these classes to define uniform spacing for all sides or specific sides (margin/padding) of your elements.</p>
    <div class="spacing-container">
      <div class="m-xs bg-gray-300 box">m-xs</div>
      <div class="m-sm bg-gray-300 box">m-sm</div>
      <div class="m-md bg-gray-300 box">m-md</div>
      <div class="m-lg bg-gray-300 box">m-lg</div>
      <div class="m-xl bg-gray-300 box">m-xl</div>
      <div class="m-xxl bg-gray-300 box">m-xxl</div>
      <div class="p-xs bg-gray-300 box">p-xs</div>
      <div class="p-sm bg-gray-300 box">p-sm</div>
      <div class="p-md bg-gray-300 box">p-md</div>
      <div class="p-lg bg-gray-300 box">p-lg</div>
      <div class="p-xl bg-gray-300 box">p-xl</div>
      <div class="p-xxl bg-gray-300 box">p-xxl</div>
    </div>
  </div>

  <div class="section">
    <h3 class="heading">Auto Margins</h3>
    <p class="description">Auto margins allow you to center elements horizontally or vertically with ease, making layouts more flexible.</p>
    <div class="spacing-container">
      <div class="m-auto bg-gray-300 box">m-auto</div>
      <div class="mx-auto bg-gray-300 box">mx-auto</div>
      <div class="my-auto bg-gray-300 box">my-auto</div>
    </div>
  </div>

  <div class="section">
    <h3 class="heading">Directional Margin and Padding</h3>
    <p class="description">Apply margins and paddings to specific sides of an element using directional classes like mt, mb, ml, mr, pt, pb, pl, and pr.</p>
    <p class="definition">These classes target specific directions for spacing—top, bottom, left, and right—allowing you to fine-tune the layout.</p>
    <div class="spacing-container">
      <div class="mt-xs bg-gray-300 box">mt-xs</div>
      <div class="mb-xs bg-gray-300 box">mb-xs</div>
      <div class="ml-xs bg-gray-300 box">ml-xs</div>
      <div class="mr-xs bg-gray-300 box">mr-xs</div>
      <div class="pt-xs bg-gray-300 box">pt-xs</div>
      <div class="pb-xs bg-gray-300 box">pb-xs</div>
      <div class="pl-xs bg-gray-300 box">pl-xs</div>
      <div class="pr-xs bg-gray-300 box">pr-xs</div>

      <div class="mt-sm bg-gray-300 box">mt-sm</div>
      <div class="mb-sm bg-gray-300 box">mb-sm</div>
      <div class="ml-sm bg-gray-300 box">ml-sm</div>
      <div class="mr-sm bg-gray-300 box">mr-sm</div>
      <div class="pt-sm bg-gray-300 box">pt-sm</div>
      <div class="pb-sm bg-gray-300 box">pb-sm</div>
      <div class="pl-sm bg-gray-300 box">pl-sm</div>
      <div class="pr-sm bg-gray-300 box">pr-sm</div>

      <div class="mt-md bg-gray-300 box">mt-md</div>
      <div class="mb-md bg-gray-300 box">mb-md</div>
      <div class="ml-md bg-gray-300 box">ml-md</div>
      <div class="mr-md bg-gray-300 box">mr-md</div>
      <div class="pt-md bg-gray-300 box">pt-md</div>
      <div class="pb-md bg-gray-300 box">pb-md</div>
      <div class="pl-md bg-gray-300 box">pl-md</div>
      <div class="pr-md bg-gray-300 box">pr-md</div>
    </div>
  </div>

  <div class="section">
    <h3 class="heading">Arbitrary Spacing</h3>
    <p class="definition">This provides full flexibility by letting you input any valid CSS value as the spacing.</p>
    <div class="spacing-container">
      <div class="m-[10rem] bg-gray-300 box">m-[10rem]</div>
      <div class="p-[20px] bg-gray-300 box">p-[20px]</div>
      <div class="mt-[30px] bg-gray-300 box">mt-[30px]</div>
      <div class="mb-[40px] bg-gray-300 box">mb-[40px]</div>
      <div class="ml-[50px] bg-gray-300 box">ml-[50px]</div>
      <div class="mr-[60px] bg-gray-300 box">mr-[60px]</div>
      <div class="pt-[30px] bg-gray-300 box">pt-[30px]</div>
      <div class="pb-[20px] bg-gray-300 box">pb-[20px]</div>
      <div class="pl-[10px] bg-gray-300 box">pl-[10px]</div>
      <div class="pr-[10px] bg-gray-300 box">pr-[10px]</div>
    </div>
  </div>

  <div class="section">
    <h3 class="heading">Percentage Spacing</h3>
    <p class="description">You can also use percentage values and viewport units (e.g., vh) for flexible, responsive layouts.</p>
    <p class="definition">This allows you to adapt the layout based on the size of the container or viewport, making the design more dynamic.</p>
    <div class="spacing-container">
      <div class="m-[10%] bg-gray-300 box">m-[10%]</div>
      <div class="p-[20%] bg-gray-300 box">p-[20%]</div>
      <div class="mt-[30%] bg-gray-300 box">mt-[30%]</div>
      <div class="mb-[40%] bg-gray-300 box">mb-[40%]</div>
      <div class="ml-[50%] bg-gray-300 box">ml-[50%]</div>
      <div class="mr-[60%] bg-gray-300 box">mr-[60%]</div>
      <div class="mt-[60vh] bg-gray-300 box">mt-[60vh]</div>
    </div>
  </div>
`;
