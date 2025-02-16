"use strict";(self.webpackChunkbuildkit_css=self.webpackChunkbuildkit_css||[]).push([[594],{"./src/stories/flexkit.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FlexboxAlignItemsExamples:()=>FlexboxAlignItemsExamples,FlexboxContainerExamples:()=>FlexboxContainerExamples,FlexboxJustifyContentExamples:()=>FlexboxJustifyContentExamples,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./dist/buildKit.css"),__webpack_require__("./dist/main.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Utilities/Flexbox",parameters:{layout:"centered"}},FlexboxContainerExamples=()=>'\n  <div style="text-align: center; margin-bottom: 30px;">\n    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Flexbox Containers</h2>\n\n    \x3c!-- Flex Container (row direction) --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Flex Container (Row Direction)</h3>\n      <div class="flex gap-[20px] m-[5px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  \n    \x3c!-- Flex Container (column direction) --\x3e\n    <div>\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Flex Container (Column Direction)</h3>\n      <div class="flex flex-column gap-[20px] m-[5px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  </div>\n',FlexboxJustifyContentExamples=()=>'\n  <div style="text-align: center; margin-bottom: 30px;">\n    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Justify Content Classes (Horizontal Alignment)</h2>\n\n    \x3c!-- Justify Center --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (Center)</h3>\n      <div class="flex justify-center gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n\n    \x3c!-- Justify Start --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (Start)</h3>\n      <div class="flex justify-start gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n\n    \x3c!-- Justify End --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (End)</h3>\n      <div class="flex justify-end gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  </div>\n',FlexboxAlignItemsExamples=()=>'\n  <div style="text-align: center; margin-bottom: 30px;">\n    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Align Items Classes (Vertical Alignment)</h2>\n\n    \x3c!-- Align Center --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Align Items (Center)</h3>\n      <div class="flex items-center gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  </div>\n',__namedExportsOrder=["FlexboxContainerExamples","FlexboxJustifyContentExamples","FlexboxAlignItemsExamples"];FlexboxContainerExamples.parameters={...FlexboxContainerExamples.parameters,docs:{...FlexboxContainerExamples.parameters?.docs,source:{originalSource:'() => `\n  <div style="text-align: center; margin-bottom: 30px;">\n    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Flexbox Containers</h2>\n\n    \x3c!-- Flex Container (row direction) --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Flex Container (Row Direction)</h3>\n      <div class="flex gap-[20px] m-[5px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  \n    \x3c!-- Flex Container (column direction) --\x3e\n    <div>\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Flex Container (Column Direction)</h3>\n      <div class="flex flex-column gap-[20px] m-[5px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  </div>\n`',...FlexboxContainerExamples.parameters?.docs?.source}}},FlexboxJustifyContentExamples.parameters={...FlexboxJustifyContentExamples.parameters,docs:{...FlexboxJustifyContentExamples.parameters?.docs,source:{originalSource:'() => `\n  <div style="text-align: center; margin-bottom: 30px;">\n    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Justify Content Classes (Horizontal Alignment)</h2>\n\n    \x3c!-- Justify Center --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (Center)</h3>\n      <div class="flex justify-center gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n\n    \x3c!-- Justify Start --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (Start)</h3>\n      <div class="flex justify-start gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n\n    \x3c!-- Justify End --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Justify Content (End)</h3>\n      <div class="flex justify-end gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  </div>\n`',...FlexboxJustifyContentExamples.parameters?.docs?.source}}},FlexboxAlignItemsExamples.parameters={...FlexboxAlignItemsExamples.parameters,docs:{...FlexboxAlignItemsExamples.parameters?.docs,source:{originalSource:'() => `\n  <div style="text-align: center; margin-bottom: 30px;">\n    <h2 style="color: #2D3748; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Align Items Classes (Vertical Alignment)</h2>\n\n    \x3c!-- Align Center --\x3e\n    <div style="margin-bottom: 20px;">\n      <h3 style="color: #4A5568; font-size: 18px; font-weight: semi-bold; margin-bottom: 10px;">Align Items (Center)</h3>\n      <div class="flex items-center gap-[10px]" style="border: 1px solid #E2E8F0; padding: 20px; border-radius: 8px; background-color: #F7FAFC; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 1</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 2</div>\n        <div class="box" style="background-color: #EDF2F7; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Item 3</div>\n      </div>\n    </div>\n  </div>\n`',...FlexboxAlignItemsExamples.parameters?.docs?.source}}}}}]);