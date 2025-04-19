function generatePrompts() {
  const userGoal = document.getElementById("userGoal").value.trim();
  if (!userGoal) {
    alert("Please enter a goal or task.");
    return;
  }

  const codingPrompt = `💻 *Coding AI Prompt:*
Write the full HTML, CSS (and JavaScript if needed) for: "${userGoal}". Ensure it's responsive and beginner-friendly.`;

  const designPrompt = `🎨 *Design AI Prompt:*
Create a UI/UX design (or wireframe) for: "${userGoal}". Suggest color palettes, font pairs, and layout ideas.`;

  const contentPrompt = `📝 *Content AI Prompt:*
Write engaging content or copy for: "${userGoal}". Include headings, about section, and calls to action.`;

  const output = `
    <h3>Here are your AI prompts:</h3>
    <div class="prompt-block">${codingPrompt}</div>
    <div class="prompt-block">${designPrompt}</div>
    <div class="prompt-block">${contentPrompt}</div>
  `;

  document.getElementById("output").innerHTML = output;

  // Store in Workshop
  const history = document.getElementById("history");
  const newItem = document.createElement("li");
  newItem.innerHTML = `<strong>${userGoal}</strong><br>${codingPrompt}<br>${designPrompt}<br>${contentPrompt}`;
  history.appendChild(newItem);
}
