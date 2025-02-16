export default {
  title: "Components/Card",
  argTypes: {
    darkMode: { control: "boolean" },
    image: { control: "text" },
    title: { control: "text" },
    content: { control: "text" },
  },
};

const createCard = ({ darkMode, title, content, image }) => {
  const card = document.createElement("div");
  card.className = `card ${darkMode ? "dark" : ""}`;

  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Card Image";
    img.className = "card-image";
    card.appendChild(img);
  }

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  const cardContent = document.createElement("p");
  cardContent.className = "card-content";
  cardContent.textContent = content;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardContent);
  card.appendChild(cardBody);

  const footer = document.createElement("div");
  footer.className = "card-footer";
  footer.textContent = "Footer Content";

  card.appendChild(footer);

  return card;
};

export const Default = (args) => createCard(args);
Default.args = {
  title: "Default Card",
  content: "This is a basic card with text content.",
  darkMode: false,
};

export const DarkMode = (args) => createCard(args);
DarkMode.args = {
  title: "Dark Mode Card",
  content: "This card is displayed in dark mode.",
  darkMode: true,
};

export const Responsive = (args) => createCard(args);
Responsive.args = {
  title: "Responsive Card",
  content: "Resize the window to see responsive behavior.",
  darkMode: false,
};
