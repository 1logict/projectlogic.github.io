const tasks = {
  "Website Development": [
    {
      ai: "Framer AI",
      description: "Generate a modern responsive website layout with animations and interactivity.",
      prompt: "Design a landing page for a tech startup with hero section, features, testimonials, and contact form using Framer."
    },
    {
      ai: "GPT-4o",
      description: "Generate the HTML/CSS/JS code for a full website structure.",
      prompt: "Write the complete code for a responsive portfolio website including navbar, about, projects, and contact section."
    }
  ],
  "Academic Research": [
    {
      ai: "ChatGPT",
      description: "Outline and write a research paper with structure and citations.",
      prompt: "Create a research paper on 'AI in Medical Diagnostics' with intro, methodology, findings, and references."
    },
    {
      ai: "Scite Assistant",
      description: "Suggest verified sources and summarize them with citations.",
      prompt: "Find 5 recent peer-reviewed studies on climate change adaptation and summarize their findings with citations."
    }
  ],
  "Study Assistant": [
    {
      ai: "Notion AI",
      description: "Create a study plan and organize notes for productivity.",
      prompt: "Generate a weekly CBSE Class 12 study planner with daily goals and revision sections."
    },
    {
      ai: "GPT-4o",
      description: "Generate flashcards and summaries for subjects.",
      prompt: "Make flashcards for Class 12 Physics – Chapter: Electromagnetic Induction with key formulas and laws."
    }
  ],
  "Creative Image/Video": [
    {
      ai: "DALL·E",
      description: "Generate high-quality AI images from description.",
      prompt: "Create a futuristic sci-fi city with neon lights and flying cars at night."
    },
    {
      ai: "Runway AI",
      description: "AI-based video generation and editing tool for creators.",
      prompt: "Make a cinematic video intro with text animations and ambient music for a tech YouTube channel."
    }
  ],
  "Business Startup": [
    {
      ai: "ChatGPT",
      description: "Generate a startup idea pitch and business model.",
      prompt: "Create a startup pitch for an AI-powered time tracker app for freelancers with key features and value prop."
    },
    {
      ai: "Gamma AI",
      description: "Design pitch decks and beautiful presentations from prompts.",
      prompt: "Design a 10-slide investor deck for a mobile-first finance budgeting app."
    }
  ]
};

const taskDropdown = document.getElementById("task");
const promptContainer = document.getElementById("promptCards");

// Populate dropdown
Object.keys(tasks).forEach(task => {
  const option = document.createElement("option");
  option.value = task;
  option.textContent = task;
  taskDropdown.appendChild(option);
});

function renderPrompts(taskType) {
  promptContainer.innerHTML = "";
  tasks[taskType].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>Task: ${taskType}</h2>
      <h3>Best AI/App: ${item.ai}</h3>
      <p class="description">${item.description}</p>
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

renderPrompts(taskDropdown.value);

taskDropdown.addEventListener("change", (e) => {
  renderPrompts(e.target.value);
});
