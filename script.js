const birthday = new Date("2004-06-16T12:35:00");
const timerEl = document.getElementById("timer");
const lightBtn = document.getElementById("lightBtn");
const overlay = document.getElementById("overlay");
const lightContainer = document.getElementById("lightContainer");
const clickSound = document.getElementById("clickSound");
const bgMusic = document.getElementById("bgMusic");

function updateTimer() {
  const now = new Date();
  const diff = now - birthday;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();



// LIGHT UP button functionality
lightBtn.addEventListener("click", () => {
  clickSound.play();
  bgMusic.play();
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
    lightContainer.classList.remove("hidden");
    document.body.classList.remove("dark");
    document.body.style.background = "radial-gradient(circle at center, #1a1a1a, #000)";
  }, 2000);
});

// CAKE or TIMELINE button logic
const cakeBtn = document.getElementById("cakeBtn");
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cakeCut") === "true") {
    cakeBtn.textContent = "Would you like to see the beautiful timeline of our friendship?";
    cakeBtn.onclick = () => {
      window.location.href = "timeline.html";
    };
  } else {
    cakeBtn.onclick = () => {
      window.location.href = "cakepage.html";
    };
  }
});

// YES/NO logic
function proceedToLightUp() {
  document.getElementById("time-check-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

function showComeBackMessage() {
  document.getElementById("time-check-container").style.display = "none";
  document.getElementById("come-back-message").style.display = "block";
}
