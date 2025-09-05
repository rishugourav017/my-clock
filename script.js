const quotes = [
  "🌟 Believe you can and you're halfway there.",
  "💪 Push yourself, because no one else will do it for you.",
  "🚀 Success doesn’t just find you. You have to go out and get it.",
  "🔥 Dream bigger. Do bigger.",
  "🏆 Don’t stop when you’re tired. Stop when you’re done.",
  "🌈 The best time to start was yesterday. The next best is now."
];

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").innerText = time;
}

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Show new quote every 12 seconds
showQuote();
setInterval(showQuote, 12000);
