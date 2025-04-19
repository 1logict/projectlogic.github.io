
const tasks = {
  "Website Development": [
    {
      ai: "Framer AI",
      task: "Generate responsive website layout with animations and interactivity.",
      description: "Use Framer AI to quickly design layouts with drag-and-drop features.",
      prompt: "Create a landing page with hero section, features, and testimonials. Ask Framer AI to adjust layout based on content and animations."
    },
    {
      ai: "GPT-4o",
      task: "Generate HTML/CSS/JS code for website structure.",
      description: "Use GPT-4o to create responsive website templates with customizable code.",
      prompt: "Generate a full website with navbar, projects, and contact section. Customize the color scheme and typography."
    }
  ],
  "Academic Research": [
    {
      ai: "ChatGPT",
      task: "Write a research paper with structured sections.",
      description: "ChatGPT helps in generating well-structured papers with citations.",
      prompt: "Create a research paper on AI in medical diagnostics, starting with an introduction and concluding with findings."
    },
    {
      ai: "Scite Assistant",
      task: "Find and summarize peer-reviewed research papers.",
      description: "Use Scite Assistant for quick source identification and summaries.",
      prompt: "Search for recent studies on climate change adaptation and summarize key findings with citations."
    }
  ],
  "Study Assistant": [
    {
      ai: "Notion AI",
      task: "Organize study plan and notes.",
      description: "Notion AI helps organize tasks and study materials for optimal productivity.",
      prompt: "Generate a weekly CBSE Class 12 study planner with daily subjects and revision time."
    },
    {
      ai: "GPT-4o",
      task: "Generate flashcards and concise summaries for subjects.",
      description: "Use GPT-4o to make quick study materials like flashcards.",
      prompt: "Create flashcards for Physics Class 12 – Chapter on Electromagnetic Induction. Focus on key formulas and principles."
    }
  ],
  "Creative Image/Video": [
    {
      ai: "DALL·E",
      task: "Generate creative images from descriptions.",
      description: "Use DALL·E for high-quality image generation based on creative prompts.",
      prompt: "Create a futuristic cityscape with neon lights and flying vehicles at night."
    },
    {
      ai: "Runway AI",
      task: "Generate and edit cinematic videos.",
      description: "Use Runway AI for video intros with animations and audio effects.",
      prompt: "Create a cinematic intro with text animations and a techno soundtrack for a tech YouTube channel."
    }
  ],
  "Business Startup": [
    {
      ai: "ChatGPT",
      task: "Generate a business idea and model.",
      description: "ChatGPT can generate startup pitches and business plans based on prompts.",
      prompt: "Create a pitch for a time-tracking app designed for freelancers. Include unique features and business model."
    },
    {
      ai: "Gamma AI",
      task: "Design pitch decks for presentations.",
      description: "Gamma AI can generate polished pitch decks with a professional design.",
      prompt: "Design a 10-slide investor deck for a mobile app that helps people budget and manage finances."
    }
  ]
};

const taskDropdown = document.getElementById("task");
const promptContainer = document.getElementById("promptCards");

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
      <h2>Task: ${item.task}</h2>
      <h3>Best AI/App: ${item.ai}</h3>
      <p class="description">${item.description}</p>
      <p><strong>Prompt:</strong> ${item.prompt}</p>
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
