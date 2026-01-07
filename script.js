function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  let msg = input.value;
  if (!msg) return;

  chat.innerHTML += `<div class="user">You: ${msg}</div>`;
  input.value = "";

  let text = msg.toLowerCase();
  let reply = "";

  if (text.includes("hi") || text.includes("hello")) {
    reply = "Hello 👋 How can I help you?";
  } 
  else if (text.includes("how are you")) {
    reply = "I'm doing great! Ready to help you 🚀";
  } 
  else if (text.includes("who are you")) {
    reply = "I am ENDGAME — an AI assistant built for knowledge and problem solving.";
  } 
  else if (text.includes("help")) {
    reply = "Sure! Tell me what you need help with 🙂";
  } 
  else if (text.includes("bye")) {
    reply = "Goodbye 👋 See you soon!";
  } 
  else {
    reply = "Interesting question 🤔 Tell me more.";
  }

  chat.innerHTML += `<div class="bot">ENDGAME: ${reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}
