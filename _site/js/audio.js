const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");

if (musicBtn && music) {
  // Get saved state
  let isPlaying = localStorage.getItem("musicPlaying") === "true";
  let savedTime = parseFloat(localStorage.getItem("musicTime")) || 0;
  music.currentTime = savedTime;

  // Function to update button text
  const updateButton = () => {
    musicBtn.textContent = isPlaying ? "⏸ Pause music" : "▶ Play music";
  };

  // Try to play if previously playing
  if (isPlaying) {
    music.play().catch(() => {
      // Autoplay blocked, wait for user click
      isPlaying = false;
      updateButton();
    });
  }

  updateButton();

  // Toggle play/pause on click
  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      isPlaying = false;
    } else {
      music.play().catch(() => {
        console.log("Autoplay blocked");
        isPlaying = false;
      });
      isPlaying = true;
    }
    updateButton();
    localStorage.setItem("musicPlaying", isPlaying);
  });

  // Save current time every second
  setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
  }, 1000);
}
