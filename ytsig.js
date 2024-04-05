document.body.textContent = "";
let phrases = [
    "Don't rot your brain.",
    "Why not do something productive, like take a nap?",
    "You could disable me, but you're better than that."
]
let header = document.createElement("h1");
let phrase = phrases[Math.floor(Math.random() * phrases.length)];
header.textContent = phrase;
content = document.createElement("div");
content.appendChild(header);
document.body.appendChild(content);
