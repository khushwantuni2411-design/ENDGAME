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

  i

