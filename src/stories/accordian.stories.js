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

<br/>
<hr/>
<h1>How to use</h1>
<pre style="background-color: #2a2a2a; color: #f8f8f8; padding: 10px; border-radius: 5px;">
<code class="html">
&lt;div class="accordion"&gt;
  &lt;div class="accordion__item"&gt;
    &lt;input type="checkbox" id="acc1" class="accordion__toggle"&gt;
    &lt;label class="accordion__header" for="acc1"&gt;Section 1&lt;/label&gt;
    &lt;div class="accordion__content"&gt;
      &lt;p&gt;This is the content of section 1.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="accordion__item"&gt;
    &lt;input type="checkbox" id="acc2" class="accordion__toggle"&gt;
    &lt;label class="accordion__header" for="acc2"&gt;Section 2&lt;/label&gt;
    &lt;div class="accordion__content"&gt;
      &lt;p&gt;This is the content of section 2.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="accordion__item"&gt;
    &lt;input type="checkbox" id="acc3" class="accordion__toggle"&gt;
    &lt;label class="accordion__header" for="acc3"&gt;Section 3&lt;/label&gt;
    &lt;div class="accordion__content"&gt;
      &lt;p&gt;This is the content of section 3.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
`;
