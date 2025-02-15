document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  // Select all elements with classes containing 'gap-['
  const elements = document.querySelectorAll("[class*='gap-[']");

  console.log("Found", elements.length, "elements with 'gap-[' in class.");

  elements.forEach((el) => {
    console.log("Element classes:", el.className);

    const match = el.className.match(/gap-\[(.*?)\]/); // Extract value inside brackets
    if (match && match[1]) {
      const value = match[1].trim(); // Remove extra spaces
      console.log("Applying --flex-gap-value:", value);
      el.style.setProperty("--flex-gap-value", value);
    } else {
      console.log("No match found for element:", el);
    }
  });
});
