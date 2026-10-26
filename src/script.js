// Mobile Navigation Toggle
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }
});

// Form Submit Simulation
function handleFormSubmit(e) {
  e.preventDefault();
  const msgBox = document.getElementById("form-msg");
  msgBox.classList.remove("hidden");
  msgBox.innerText =
    "درخواست شما با موفقیت ثبت شد. به‌زودی با شما تماس خواهم گرفت.";
  e.target.reset();
  setTimeout(() => {
    msgBox.classList.add("hidden");
  }, 5000);
}

// Particle Canvas Background (Electronic Circuit Node Effect)
const canvas = document.getElementById("circuitCanvas");
const ctx = canvas.getContext("2d");

let width, height;
let particles = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.radius = Math.random() * 1.5 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.scale * Math.PI * 2);
    ctx.fillStyle = "rgba(0, 242, 254, 0.4)";
    ctx.fill();
  }
}

for (let i = 0; i < 45; i++) {
  particles.push(new Particle());
}

function animateCanvas() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 130) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 130)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animateCanvas);
}

window.onload = function () {
  animateCanvas();
};
