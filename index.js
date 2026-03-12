const flirtLines = [
  "Are you made of copper and tellurium? Because you're Cu-Te 😏",
  "I think my heart just updated its favorite person ❤️",
  "You’re so hot, you must be the reason for global warming 🔥",
  "If kisses were snowflakes, I'd send you a blizzard ❄️😉",
  "Warning: You are dangerously cute 🚨",
  "My brain says focus… my heart says think about you 💖",
  "Is it just me, or do you make everything around you hotter? 😈",
  "I’d say God bless you, but it looks like he already did twice 😇",
  "Honestly… how are you this adorable?",
  "You must be a magician, because every time you’re around, I feel a little… *spellbound* 😘",
  "If flirting was a sport, I’d be winning with you every time 🏆",
  "You’re the reason my phone battery dies… I keep smiling at it 😄",
  "I hope you like bad boys/girls, because I’m a little trouble… ready to charm you 😉",
  "Is it hot in here, or is it just you? 🔥😏",
  "I’d love to be your favorite distraction today… and maybe every day 😌"
];

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "-20px";
  heart.style.fontSize = "30px";
  heart.style.zIndex = 9998;
  document.body.appendChild(heart);

  let fall = setInterval(() => {
    heart.style.top = heart.offsetTop + 4 + "px";

    if (heart.offsetTop > window.innerHeight) {
      heart.remove();
      clearInterval(fall);
    }
  }, 30);
}

function createFlirt() {
  const msg = document.createElement("div");
  msg.className = "flirt";
  msg.innerText = flirtLines[Math.floor(Math.random() * flirtLines.length)];
  msg.style.left = Math.random() * (window.innerWidth - 200) + "px";
  msg.style.top = Math.random() * (window.innerHeight - 50) + "px";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 6000);
}

setInterval(createHeart, 400);
setInterval(createFlirt, 4000);
