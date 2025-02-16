export default {
  title: "Utilities/Flexbox", // Grouping Flexbox utilities under a "Utilities" category
  parameters: {
    layout: "centered", // Center the stories in Storybook
  },
};

export const FlexboxContainerExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Flexbox Containers</h2>

    <!-- Flex Container (row direction) -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Flex Container (Row Direction)</h3>
      <div class="flex gap-[20px] m-[5px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>
      </div>
    </div>
  
    <!-- Flex Container (column direction) -->
    <div>
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Flex Container (Column Direction)</h3>
      <div class="flex flex-column gap-[20px] m-[5px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>
      </div>
    </div>
  </div>
`;

export const FlexboxJustifyContentExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Justify Content Classes (Horizontal Alignment)</h2>

    <!-- Justify Center -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (Center)</h3>
      <div class="flex justify-center gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>
      </div>
    </div>

    <!-- Justify Start -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (Start)</h3>
      <div class="flex justify-start gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>
      </div>
    </div>

    <!-- Justify End -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (End)</h3>
      <div class="flex justify-end gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>
      </div>
    </div>
  </div>
`;

export const FlexboxAlignItemsExamples = () => `
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Align Items Classes (Vertical Alignment)</h2>

    <!-- Align Center -->
    <div style="margin-bottom: 20px;">
      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Align Items (Center)</h3>
      <div class="flex items-center gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>
        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>
      </div>
    </div>
  </div>
`;
