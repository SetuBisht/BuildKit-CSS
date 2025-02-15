import "../../dist/buildKit.css";
import "../../dist/main.js";

export default {
  title: "Utilities/Flexbox",
};

export const FlexboxExamples = () => `
  <style>
    .box {
      width: 100px;
      height: 50px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 14px;
      background-color: #e2e8f0;
    }
  </style>

  <h3>Flexbox Container Classes</h3>
  
  <!-- Flex Container with Row Direction -->
  <div class="flex gap-[20px] m-[5px]">
    <div class="box m-[5px]">Item 1</div>
    <div class="box m-[5px]">Item 2</div>
    <div class="box ">Item 3</div>
  </div>

  <!-- Flex Container with Column Direction -->
  <div class="flex flex-column">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <h3>Justify Content Classes (Horizontal Alignment)</h3>

  <!-- Justify Center -->
  <div class="flex justify-center">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Justify Start -->
  <div class="flex justify-start">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Justify End -->
  <div class="flex justify-end">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Justify Between -->
  <div class="flex justify-between">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Justify Around -->
  <div class="flex justify-around">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Justify Evenly -->
  <div class="flex justify-evenly">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <h3>Align Items Classes (Vertical Alignment)</h3>

  <!-- Align Center -->
  <div class="flex items-center">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Align Start -->
  <div class="flex items-start">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Align End -->
  <div class="flex items-end">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Align Baseline -->
  <div class="flex items-baseline">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Align Stretch -->
  <div class="flex items-stretch">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <h3>Flex Wrap Classes</h3>

  <!-- Flex Wrap No Wrap -->
  <div class="flex wrap-nowrap">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Flex Wrap -->
  <div class="flex wrap-wrap">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>

  <!-- Flex Wrap Reverse -->
  <div class="flex wrap-wrap-reverse">
    <div class="box">Item 1</div>
    <div class="box">Item 2</div>
    <div class="box">Item 3</div>
  </div>
`;
