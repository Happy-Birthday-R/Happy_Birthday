window.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  bgm.play().catch(() => {
    document.body.addEventListener("click", () => {
      bgm.play();
    }, { once: true });
  });



  const descElement = document.getElementById("timeline-description");

  function typeWriter(text, i = 0) {
    if (i < text.length) {
      descElement.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(text, i + 1), 40);
    }
  }

  typeWriter(descriptionText);
});

// tsParticles background
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: {
      value: 80,
      density: { enable: true, area: 800 }
    },
    color: {
      value: ["#ffb6c1", "#ffc0cb", "#ffd700", "#ffe4e1"]
    },
    shape: { type: "star" },
    opacity: {
      value: 0.3,
      random: true,
      animation: {
        enable: true,
        speed: 0.2,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: true
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" }
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.25,
        color: "#ffffff"
      }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" }
    },
    modes: {
      bubble: {
        distance: 100,
        size: 4,
        duration: 2,
        opacity: 0.6
      }
    }
  },
  detectRetina: true
});
