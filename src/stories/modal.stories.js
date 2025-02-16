export default {
  title: "Prebuilt/Modal",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    darkMode: { control: "boolean" },
  },
};

// Template for modal
const Template = ({ darkMode, size }) => {
  const container = document.createElement("div");

  // Create button to trigger modal
  const button = document.createElement("button");
  button.innerText = "Open Modal";
  button.className = "btn btn-primary openModalBtn";
  container.appendChild(button);

  // Function to create modal
  const createModal = () => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay ";

    const modal = document.createElement("div");
    modal.className = `modal ${darkMode ? "dark" : ""} ${size}`;

    modal.innerHTML = `
      <div class="modal-header">
        <span>Modal Title</span>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <p>This is a ${darkMode ? "dark mode" : "light mode"} modal.</p>
      </div>
      <div class="modal-footer">
        <button class="btn close-modal closeModalBtn">Close</button>
        <button class="btn btn-primary openModalBtn">Save</button>
      </div>
    `;

    overlay.appendChild(modal);
    container.appendChild(overlay);

    // Ensure elements exist before adding event listeners
    const closeButton = modal.querySelector(".modal-close");
    const closeModal = modal.querySelector(".close-modal");

    button.addEventListener("click", () => {
      overlay.style.visibility = "visible";
      overlay.style.opacity = "1";
      modal.style.opacity = "1";
    });

    overlay.addEventListener("click", () => {
      overlay.style.visibility = "hidden";
      overlay.style.opacity = "0";
      modal.style.opacity = "0";
    });

    modal.addEventListener("click", (e) => e.stopPropagation()); // Prevent modal from closing when clicking inside

    if (closeButton) {
      closeButton.addEventListener("click", () => {
        overlay.style.visibility = "hidden";
        modal.style.opacity = "0";
      });
    }

    if (closeModal) {
      closeModal.addEventListener("click", () => {
        overlay.style.visibility = "hidden";
        modal.style.opacity = "0";
      });
    }
  };

  createModal(); // Call function after elements exist
  return container;
};

// Stories
export const Default = Template.bind({});
Default.args = {
  darkMode: false,
  size: "modal-md",
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true,
  size: "modal-md",
};

export const LargeModal = Template.bind({});
LargeModal.args = {
  darkMode: false,
  size: "modal-lg",
};

export const SmallModal = Template.bind({});
SmallModal.args = {
  darkMode: false,
  size: "modal-sm",
};
