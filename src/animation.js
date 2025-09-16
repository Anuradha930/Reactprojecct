import confetti from "canvas-confetti";

/**
 * 🎈 Balloons Rising Upward
 * @param {number} duration - total duration in ms
 * @param {number} count - number of confetti particles per frame
 */
export function balloonsUp(duration = 5000, count = 3) {
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: count,
      angle: 90, // straight up
      spread: 20,
      startVelocity: 70, // slower rise
      origin: { x: Math.random(), y: 1.2 }, // start below screen
      gravity: -0.1, // negative gravity = upward
      scalar: 1.2, // size of balloons
      shapes: ["balloon"], // balloon-like shapes
      colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"], // balloon colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

/**
 * 🎉 Confetti Burst
 * @param {number} particleCount - number of confetti particles
 */
export function confettiBlast(particleCount = 100) {
  confetti({
    particleCount ,
    spread: 360,
    origin: { y: 0.6 },
    colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF9F1C", "#2EC4B6"],
  });
}

/**
 * 📝 Welcome Letters Animation (for Veg Page)
 * @param {string} message - text to show
 * @param {number} duration - how long the letters stay (ms)
 */
export function lettersAnimation(message = "Welcome to Veg Page", duration = 4000) {
  const container = document.createElement("div");
  container.className = "letters-container";
  container.style.position = "fixed";
  container.style.top = "30%";
  container.style.left = "50%";
  container.style.transform = "translateX(-50%)";
  container.style.zIndex = 9999;
  document.body.appendChild(container);

  message.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    const hue = Math.floor(Math.random() * 360);
    span.style.color = `hsl(${hue}, 70%, 50%)`;
    span.style.fontSize = "2rem";
    span.style.fontWeight = "bold";
    span.style.margin = "0 1px";
    span.style.position = "relative";
    span.style.display = "inline-block";
    span.style.transition = `transform ${duration / 1000}s ease-out, opacity ${duration / 1000}s ease-out`;
    container.appendChild(span);

    // Animate upward
    setTimeout(() => {
      span.style.transform = "translateY(-150px) scale(1.5)";
      span.style.opacity = 0;
    }, 50);
  });

  setTimeout(() => {
    container.remove();
  }, duration);
}
