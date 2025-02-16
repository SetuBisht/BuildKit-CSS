export default {
  title: "Components/Accordion",
  parameters: {
    layout: "centered",
  },
};

export const Default = () => `
<div class="accordion">
  <div class="accordion-item">
    <input type="checkbox" id="acc1" class="accordion-toggle">
    <label class="accordion-header" for="acc1">Section 1</label>
    <div class="accordion-content">
      <p>This is the content of section 1.</p>
    </div>
  </div>
  <div class="accordion-item">
    <input type="checkbox" id="acc2" class="accordion-toggle">
    <label class="accordion-header" for="acc2">Section 2</label>
    <div class="accordion-content">
      <p>This is the content of section 2.</p>
    </div>
  </div>
  <div class="accordion-item">
    <input type="checkbox" id="acc3" class="accordion-toggle">
    <label class="accordion-header" for="acc3">Section 3</label>
    <div class="accordion-content">
      <p>This is the content of section 3.</p>
    </div>
  </div>
</div>
`;
