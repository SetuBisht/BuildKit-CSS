import "../../dist/buildKit.css";
import "../../dist/main.js";

export default {
  title: "Utilities/Spacing",
};

export const SpacingExamples = () => `
  <style>
    .bg-gray-300 { background-color: #e2e8f0; }
    .box {
      width: 100px;
      height: 50px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 14px;
    }
  </style>
  
  <h3>Predefined Spacing Classes</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="m-xs  bg-gray-300 box">m-xs</div>
    <div class="m-sm bg-gray-300 box">m-sm</div>
    <div class="m-md bg-gray-300 box">m-md</div>
    <div class="m-lg bg-gray-300 box">m-lg</div>
    <div class="m-xl bg-gray-300 box">m-xl</div>
    <div class="m-xxl bg-gray-300 box">m-xxl</div>
  </div>

  <h3>Padding Spacing Classes</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="p-xs bg-gray-300 box">p-xs</div>
    <div class="p-sm bg-gray-300 box">p-sm</div>
    <div class="p-md bg-gray-300 box">p-md</div>
    <div class="p-lg bg-gray-300 box">p-lg</div>
    <div class="p-xl bg-gray-300 box">p-xl</div>
    <div class="p-xxl bg-gray-300 box">p-xxl</div>
  </div>


  <h3>Auto Margins</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="m-auto bg-gray-300 box">m-auto</div>
    <div class="mx-auto bg-gray-300 box">mx-auto</div>
    <div class="my-auto bg-gray-300 box">my-auto</div>
  </div>

  <h3>Arbitrary Spacing</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="m-[10rem] pt-[20px] bg-gray-300 box">m-[10rem]</div>
    <div class="p-[20px] bg-gray-300 box">p-[20px]</div>
    <div class="mt-[30px] bg-gray-300 box">mt-[30px]</div>
    <div class="mb-[40px] bg-gray-300 box">mb-[40px]</div>
    <div class="ml-[50px] bg-gray-300 box">ml-[50px]</div>
    <div class="mr-[60px] bg-gray-300 box">mr-[60px]</div>
  </div>


   <h3>% Spacing</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="m-[10%] bg-gray-300 box">m-[10%]</div>
    <div class="p-[20%] bg-gray-300 box">p-[20%]</div>
    <div class="mt-[30%] bg-gray-300 box">mt-[30px]</div>
    <div class="mb-[40%] bg-gray-300 box">mb-[40%]</div>
    <div class="ml-[50%] bg-gray-300 box">ml-[50%]</div>
    <div class="mt-[60vh] bg-gray-300 box">mt-[60vh]</div>
  </div>
`;
