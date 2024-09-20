// Helps use the other blinking animation on the greetings text
const greetings = document.querySelector(".greetings");
const spans = greetings.querySelectorAll("span");

setInterval(() => {
  // Add the blink class to all spans
  spans.forEach((span) => {
    span.classList.add("blink");
  });

  // Remove the blink class after the animation ends
  setTimeout(() => {
    spans.forEach((span) => {
      span.classList.remove("blink");
    });
  }, 1000); // Duration of the blink animation
}, 4000); // Repeat every 4s (testing required)
