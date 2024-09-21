document.addEventListener("DOMContentLoaded", function () {
  const spans = document.querySelectorAll(".greetings span");

  function startAnimation() {
    // Set initial animation delays
    spans.forEach((span, index) => {
      span.style.animationDuration = "5s"; // Reset duration to 5s
      span.style.animationDelay = `${index * 0.2}s`; // Incremental delay
    });

    // Calculate total duration of the initial animation (13 elements * 0.2s each + extra 0.6s for some padding delay)
    const totalDuration = spans.length * 0.2 + 0.6;

    // Set a timeout for when to reset the animations
    setTimeout(() => {
      spans.forEach((span) => {
        span.style.animationDuration = "4s"; // Change duration to 4s
        span.style.animationDelay = "0s"; // Reset delay set to 0 to start immediately
      });

      // Set another timeout to revert back to original settings
      setTimeout(() => {
        spans.forEach((span) => {
          // Remove the animation class to reset
          span.style.animation = "none";
        });
        // Force reflow to restart the animation
        void spans[0].offsetWidth; // Trigger reflow
        spans.forEach((span, index) => {
          span.style.animationDuration = "5s"; // Reset duration to the original 5s
          span.style.animationDelay = `${index * 0.2}s`; // Reset delay
          span.style.animation = ""; // Re-add animation property
        });

        // Start the animation again
        startAnimation();
      }, 3000); // Wait for 3s before resetting back
    }, totalDuration * 1000); // Convert to milliseconds
  }

  // Start the first animation cycle
  startAnimation();
});
