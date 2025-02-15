document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[class*="["]').forEach((el) => {
    const match = el.className.match(/(\w+)-\[(.*?)\]/);
    if (match) {
      el.style.setProperty("--spacing", match[2]);
    }
  });
});
