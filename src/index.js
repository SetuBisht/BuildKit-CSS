document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  // Handle gap-[...] classes
  document.querySelectorAll("[class*='gap-[']").forEach((el) => {
    const match = el.className.match(/gap-\[(.*?)\]/);
    if (match && match[1]) {
      const value = match[1].trim();
      console.log("Applying --flex-gap-value:", value);
      el.style.setProperty("--flex-gap-value", value);
    }
  });

  // Handle margin and padding classes
  document.querySelectorAll("*").forEach((el) => {
    el.classList.forEach((cls) => {
      const match = cls.match(/(m|p|mt|mb|ml|mr|pt|pb|pl|pr)-\[(.*?)\]/);
      if (match && match[2]) {
        const property = match[1]; // e.g., "m", "p", "mt"
        const value = match[2].trim(); // Extracted spacing value

        // Apply CSS variables instead of direct styles
        switch (property) {
          case "m":
            el.style.setProperty("--margin-value", value);
            break;
          case "p":
            el.style.setProperty("--padding-value", value);
            break;
          case "mt":
            el.style.setProperty("--margin-top", value);
            break;
          case "mb":
            el.style.setProperty("--margin-bottom", value);
            break;
          case "ml":
            el.style.setProperty("--margin-left", value);
            break;
          case "mr":
            el.style.setProperty("--margin-right", value);
            break;
          case "pt":
            el.style.setProperty("--padding-top", value);
            break;
          case "pb":
            el.style.setProperty("--padding-bottom", value);
            break;
          case "pl":
            el.style.setProperty("--padding-left", value);
            break;
          case "pr":
            el.style.setProperty("--padding-right", value);
            break;
        }
      }
    });
  });
});
