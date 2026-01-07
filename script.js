function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  let msg = input.value;
  if (!msg) return;

  chat.innerHTML += `<div class="user">You: ${msg}</div>`;
  input.value = "";

  let reply = "I am ENDGAME. Thinking...";

  if (msg.toLowerCase().includes("who are you")) {
    reply = "I am ENDGAME — an advanced AI assistant.";
  } else if (msg.toLowerCase().includes("help")) {
    reply = "I can help you with studies, tech, and ideas.";
  } else if (msg.toLowerCase().includes("hello")) {
    reply = "Hello 👋 How can I help you?";
  }

  chat.innerHTML += `<div class="bot">ENDGAME: ${reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}
