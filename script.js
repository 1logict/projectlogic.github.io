const prompts = {
  website: [
    {
      ai: "ChatGPT",
      prompt:
        "Create a responsive website structure including header, hero, services, testimonials, and footer. Use semantic HTML and Tailwind CSS.",
    },
    {
      ai: "Gemini",
      prompt:
        "Generate UI/UX design ideas for a modern portfolio site. Include layout ideas, font pairing, and a soft color palette.",
    },
    {
      ai: "Claude",
      prompt:
        "Recommend animation libraries to enhance user experience on a landing page. Include example usage.",
    },
  ],
  research: [
    {
      ai: "ChatGPT",
      prompt:
        "Outline a research paper on the impact of quantum computing on cybersecurity. Include sections and brief descriptions.",
    },
    {
      ai: "Gemini",
      prompt:
        "Suggest credible sources and journals for a literature review on climate change models.",
    },
    {
      ai: "Claude",
      prompt:
        "Provide citation styles and formatting rules for IEEE and APA standards.",
    },
  ],
  mobile: [
    {
      ai: "ChatGPT",
      prompt:
        "Generate a basic Flutter app layout for a weather application. Include widgets used and folder structure.",
    },
    {
      ai: "Gemini",
      prompt:
        "Suggest UI components for a minimalist mobile to-do list app. Provide color themes and font recommendations.",
    },
    {
      ai: "Claude",
      prompt:
        "Explain the difference between native and hybrid mobile apps with pros/cons and real-world examples.",
    },
  ],
  startup: [
    {
      ai: "ChatGPT",
      prompt:
        "Create a 60-second startup pitch for an AI-powered study planner app aimed at students.",
    },
    {
      ai: "Gemini",
      prompt:
        "Generate a business model canvas for a new tech education platform focused on gamification.",
    },
    {
      ai: "Claude",
      prompt:
        "List essential slides for a startup investor pitch deck with brief explanations for each.",
    },
  ],
  study: [
    {
      ai: "ChatGPT",
      prompt:
        "Build a weekly study schedule for a CBSE Class 12 student preparing for Boards and Digital SAT.",
    },
    {
      ai: "Gemini",
      prompt:
        "Suggest AI tools that can help in summarizing textbooks, organizing notes, and generating flashcards.",
    },
    {
      ai: "Claude",
      prompt:
        "Create a 30-day productivity challenge with daily study tasks, focus tips, and motivation boosters.",
    },
  ],
};

const taskDropdown = document.getElementById("task");
const promptContainer = document.getElementById("promptCards");

// Add the new task options dynamically
const newTasks = [
  { value: "mobile", label: "Mobile App" },
  { value: "startup", label: "Startup Pitch" },
  { value: "study", label: "Study Assistant" },
];

newTasks.forEach((task) => {
  const option = document.createElement("option");
  option.value = task.value;
  option.textContent = task.label;
  taskDropdown.appendChild(option);
});

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
