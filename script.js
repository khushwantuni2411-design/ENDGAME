let memory = [];

function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  let msg = input.value.trim();
  if (!msg) return;

  chat.innerHTML += `<div class="user">You: ${msg}</div>`;
  input.value = "";

  memory.push({ role: "user", content: msg });

  // thinking message
  const thinkingDiv = document.createElement("div");
  thinkingDiv.className = "bot";
  thinkingDiv.innerText = "ENDGAME is thinking...";
  chat.appendChild(thinkingDiv);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    chat.removeChild(thinkingDiv);

    let reply = getReply(msg);
    memory.push({ role: "bot", content: reply });

    typeEffect(chat, "ENDGAME", reply);
  }, 800);
}

function getReply(msg) {
  let text = msg.toLowerCase();

  if (text.includes("hi") || text.includes("hello"))
    return "Hello 👋 I am ENDGAME. How can I assist you today?";

  if (text.includes("how are you"))
    return "I am functioning optimally. Thanks for asking.";

  if (text.includes("who are you"))
    return "I am ENDGAME — an advanced web-based AI assistant.";

  if (text.includes("what can you do"))
    return "I can help with studies, explanations, ideas, and problem solving.";

  if (text.includes("remember"))
    return "Yes. I can remember messages during this session.";

  return "That’s an interesting thought. Can you explain it a bit more?";
}

function typeEffect(chat, name, text) {
  let i = 0;
  const div = document.createElement("div");
  div.className = "bot";
  div.innerHTML = `<strong>${name}:</strong> `;
  chat.appendChild(div);

  const interval = setInterval(() => {
    if (i < text.length) {
      div.innerHTML += text.charAt(i);
      i++;
      chat.scrollTop = chat.scrollHeight;
    } else {
      clearInterval(interval);
    }
  }, 30);
}
