const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function setError(id, message) {
  document.getElementById(id).textContent = message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  setError("nameError", "");
  setError("emailError", "");
  setError("messageError", "");
  formStatus.textContent = "";

  let valid = true;

  if (name.length < 2) {
    setError("nameError", "Please enter your name.");
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setError("emailError", "Please enter a valid email address.");
    valid = false;
  }

  if (message.length < 10) {
    setError("messageError", "Message must be at least 10 characters.");
    valid = false;
  }

  if (!valid) {
    formStatus.textContent = "Please correct the highlighted fields.";
    formStatus.style.color = "#d92d20";
    return;
  }

  formStatus.textContent = "Message validated. Opening your email app...";
  formStatus.style.color = "#067647";

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:pankajshakya.9918@gmail.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
