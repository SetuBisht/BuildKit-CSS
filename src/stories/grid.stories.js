export default {
  title: "Utilities/Grid",
};

export const GridUtilities = () => `
  <style>
    /* Demo styling */
    .grid-demo {
      margin: 20px;
      background-color: #f9fafb;
      padding: 16px;
      border: 1px solid #e2e8f0;
    }
    .grid-demo .item {
      background: #e2e8f0;
      padding: 16px;
      border: 1px solid #cbd5e0;
      text-align: center;
      font-size: 14px;
    }
  </style>

  <h3>Default Grid with Gap Utilities</h3>
  <div class="grid grid-demo gap-md">
    <div class="item col-4">Col 4</div>
    <div class="item col-4">Col 4</div>
    <div class="item col-4">Col 4</div>
  </div>

  <h3>Grid with Different Gaps</h3>
  <div class="grid grid-demo gap-sm">
    <div class="item col-3">Col 3</div>
    <div class="item col-3">Col 3</div>
    <div class="item col-3">Col 3</div>
    <div class="item col-3">Col 3</div>
  </div>

  <h3>Grid with Flex Alignment Utilities</h3>
  <div class="grid grid-demo gap-md align-center justify-center" style="height: 150px;">
    <div class="item col-3">Col 3</div>
    <div class="item col-3">Col 3</div>
    <div class="item col-3">Col 3</div>
    <div class="item col-3">Col 3</div>
  </div>

  <h3>Responsive Grid Example</h3>
  <div class="grid grid-demo gap-lg">
    <div class="item col-sm-6 col-md-4 col-lg-3">Responsive</div>
    <div class="item col-sm-6 col-md-4 col-lg-3">Responsive</div>
    <div class="item col-sm-6 col-md-4 col-lg-3">Responsive</div>
    <div class="item col-sm-6 col-md-4 col-lg-3">Responsive</div>
  </div>
`;
