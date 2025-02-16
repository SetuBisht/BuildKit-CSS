document.addEventListener("DOMContentLoaded", () => {
  function openModal() {
    document.getElementById("myModal").classList.add("show");
  }

  function closeModal() {
    document.getElementById("myModal").classList.remove("show");
  }

  // Close modal on outside click
  document.getElementById("myModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

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

  document.querySelectorAll("[class*='font-s-[']").forEach((el) => {
    const match = el.className.match(/font-s-\[(.*?)\]/);
    if (match && match[1]) {
      const value = match[1].trim();
      el.style.setProperty("--font-size", value);
    }
  });

  document.querySelectorAll("[class*='font-w-[']").forEach((el) => {
    const match = el.className.match(/font-w-\[(.*?)\]/);
    if (match && match[1]) {
      const value = match[1].trim();
      el.style.setProperty("--font-weight", value);
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

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded and parsed.");

//   // Cache regex patterns
//   const gapRegex = /gap-\[(.*?)\]/;
//   const spacingRegex = /^(m|p|mt|mb|ml|mr|pt|pb|pl|pr)-\[(.*?)\]$/;

//   // Query only elements whose class attribute contains '-['
//   const elements = document.querySelectorAll('[class*="-["]');
//   console.log(
//     "Found",
//     elements.length,
//     "elements with arbitrary spacing classes."
//   );

//   elements.forEach((el) => {
//     // Process gap-[...] classes
//     const gapMatch = el.className.match(gapRegex);
//     if (gapMatch && gapMatch[1]) {
//       const gapValue = gapMatch[1].trim();
//       console.log("Applying --flex-gap-value:", gapValue);
//       el.style.setProperty("--flex-gap-value", gapValue);
//     }

//     // Process margin/padding classes (m-[...], p-[...], etc.)
//     el.classList.forEach((cls) => {
//       const match = cls.match(spacingRegex);
//       if (match && match[2]) {
//         const property = match[1]; // e.g., "m", "p", "mt", etc.
//         const value = match[2].trim();

//         // Set CSS variables based on property
//         switch (property) {
//           case "m":
//             el.style.setProperty("--margin-value", value);
//             break;
//           case "p":
//             el.style.setProperty("--padding-value", value);
//             break;
//           case "mt":
//             el.style.setProperty("--margin-top", value);
//             break;
//           case "mb":
//             el.style.setProperty("--margin-bottom", value);
//             break;
//           case "ml":
//             el.style.setProperty("--margin-left", value);
//             break;
//           case "mr":
//             el.style.setProperty("--margin-right", value);
//             break;
//           case "pt":
//             el.style.setProperty("--padding-top", value);
//             break;
//           case "pb":
//             el.style.setProperty("--padding-bottom", value);
//             break;
//           case "pl":
//             el.style.setProperty("--padding-left", value);
//             break;
//           case "pr":
//             el.style.setProperty("--padding-right", value);
//             break;
//         }
//       }
//     });
//   });
// });
