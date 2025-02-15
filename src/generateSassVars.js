// scripts/generateSassVars.js
module.exports = function generateSassVars(config) {
  const convertMap = (map, varName) => {
    if (!map || typeof map !== "object" || Object.keys(map).length === 0) {
      return ""; // Return an empty string if the map is missing or empty
    }
    const sassMap = Object.keys(map)
      .map((key) => `${key}: ${map[key]}`)
      .join(", ");
    return `$${varName}: (${sassMap});\n`;
  };

  let sassVars = "";
  sassVars += convertMap(config.spacingValues, "spacing-values");
  sassVars += convertMap(config.colors, "colors");
  sassVars += convertMap(config.breakpoints, "breakpoints");
  // Add additional design tokens here as needed
  return sassVars;
};
