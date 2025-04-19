function generatePrompt() {
  const task = document.getElementById("task").value;
  let response = "";

  switch (task) {
    case "coding":
      response = `💻 *AI Response:*
Sure! Here's a beginner-friendly JavaScript project:
- **Project:** To-Do List App
- **Features:** Add/delete tasks, mark as complete, store in localStorage
- **Tech Stack:** HTML, CSS, Vanilla JS
- **Tip:** Start with basic layout, then move to task logic.`;
      break;

    case "design":
      response = `🎨 *AI Response:*
Let’s design a landing page for an AI startup:
- **Look:** Futuristic, neon glow, dark mode
- **Sections:** Header, Mission, Product Showcase, Testimonials, CTA
- **Tools:** Figma, Framer, HTML/CSS
- **Font Suggestions:** Orbitron, Poppins`;
      break;

    case "learn":
      response = `📚 *AI Response:*
Here's a learning roadmap to master Python:
1. **Basics:** Syntax, variables, loops
2. **Projects:** Calculator, Quiz App
3. **Next:** OOP, file handling
4. **Advanced:** APIs, Flask, Data Science (Pandas, NumPy)
Time: ~3 months with daily 1 hr study.`;
      break;

    case "startup":
      response = `🚀 *AI Response:*
AI-powered Student Productivity Tool:
- **Name:** FocusBoost.ai
- **Target:** Students & learners
- **Problem Solved:** Distractions, disorganized notes
- **Core Features:** Smart planner, AI-generated summaries, motivation tracker
- **Revenue:** Freemium model with premium features`;
      break;
  }

  const outputBox = document.getElementById("output");
  outputBox.innerHTML = response;

  const history = document.getElementById("history");
  const newItem = document.createElement("li");
  newItem.innerHTML = response;
  history.appendChild(newItem);
}
