export default {
  title: "Components/Modal",
  argTypes: {
    darkMode: { control: "boolean" },
    title: { control: "text" },
    content: { control: "text" },
    isOpen: { control: "boolean" },
  },
};

const styles = `
  .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
  }
  
  .modal {
      background: var(--modal-bg, #fff);
      color: var(--modal-text, #333);
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      width: 90%;
      max-width: 500px;
      transform: translateY(-20px);
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .modal.dark {
      --modal-bg: #1e1e1e;
      --modal-text: #f5f5f5;
  }
  
  .modal-header {
      padding: 16px;
      font-size: 1.25rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .modal-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
  }

  .modal-body {
      padding: 16px;
  }

  .modal-footer {
      padding: 12px 16px;
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* Show Modal */
  .modal-overlay.show {
      opacity: 1;
      visibility: visible;
  }

  .modal-overlay.show .modal {
      opacity: 1;
      transform: translateY(0);
  }
`;

const createModal = ({ darkMode, title, content, isOpen }) => {
  const styleTag = document.createElement("style");
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);

  const overlay = document.createElement("div");
  overlay.className = `modal-overlay ${isOpen ? "show" : ""}`;

  const modal = document.createElement("div");
  modal.className = `modal ${darkMode ? "dark" : ""}`;

  const header = document.createElement("div");
  header.className = "modal-header";
  header.innerHTML = `
    <span>${title}</span>
    <button class="modal-close">&times;</button>
  `;

  const body = document.createElement("div");
  body.className = "modal-body";
  body.textContent = content;

  const footer = document.createElement("div");
  footer.className = "modal-footer";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.className = "modal-close-btn";

  footer.appendChild(closeButton);
  modal.appendChild(header);
  modal.appendChild(body);
  modal.appendChild(footer);
  overlay.appendChild(modal);

  document.body.appendChild(overlay);

  // Close Modal on Button Click
  const closeModal = () => {
    overlay.classList.remove("show");
  };

  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  closeButton.addEventListener("click", closeModal);

  // Close Modal when clicking outside
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  return overlay;
};

// Default Modal
export const Default = (args) => {
  return createModal(args);
};
Default.args = {
  title: "Default Modal",
  content: "This is a basic modal dialog.",
  darkMode: false,
  isOpen: true,
};

// Dark Mode Modal
export const DarkMode = (args) => {
  return createModal(args);
};
DarkMode.args = {
  title: "Dark Mode Modal",
  content: "This modal appears in dark mode.",
  darkMode: true,
  isOpen: true,
};

// Closed Modal
export const Closed = (args) => {
  return createModal(args);
};
Closed.args = {
  title: "Closed Modal",
  content: "This modal starts closed.",
  darkMode: false,
  isOpen: false,
};
