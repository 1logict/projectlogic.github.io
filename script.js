const prompts = {
  website: [
    {
      ai: "ChatGPT",
      prompt:
        "Create a complete website structure with components like navbar, hero section, features, footer. Specify HTML, CSS, and JavaScript required. Include design tips.",
    },
    {
      ai: "Gemini",
      prompt:
        "Generate UI/UX design ideas for a responsive website. Provide a layout, font choices, and color palette in dark theme.",
    },
    {
      ai: "Claude",
      prompt:
        "List advanced JavaScript libraries or frameworks suitable for dynamic website building. Provide sample integration code.",
    },
  ],
  research: [
    {
      ai: "ChatGPT",
      prompt:
        "Generate a research paper outline on AI in Healthcare. Include abstract, intro, methodology, results, and references.",
    },
    {
      ai: "Gemini",
      prompt:
        "Suggest trending research areas in Artificial Intelligence for publication in top journals. Provide keywords and methodology suggestions.",
    },
    {
      ai: "Claude",
      prompt:
        "Guide on publishing a paper in IEEE or ACM. Include formatting rules, submission process, and reviewer expectations.",
    },
  ],
};

const taskDropdown = document.getElementById("task");
const promptContainer = document.getElementById("promptCards");

function renderPrompts(taskType) {
  promptContainer.innerHTML = "";
  prompts[taskType].forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>Task: ${taskType}</h2>
      <h3>AI Engine: ${item.ai}</h3>
      <p>${item.prompt}</p>
      <button class="copy-button">Copy Prompt</button>
    `;

    card.querySelector(".copy-button").addEventListener("click", () => {
      navigator.clipboard.writeText(item.prompt);
      alert("Prompt copied to clipboard!");
    });

    promptContainer.appendChild(card);
  });
}

// Initial render
renderPrompts(taskDropdown.value);

// Update prompts when dropdown changes
taskDropdown.addEventListener("change", (e) => {
  renderPrompts(e.target.value);
});
