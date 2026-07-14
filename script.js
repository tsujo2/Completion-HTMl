// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// Home page dynamic date and greeting
const currentDate = document.getElementById("currentDate");
const greeting = document.getElementById("greeting");

if (currentDate) {
  const today = new Date();
  currentDate.textContent = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

if (greeting) {
  const hour = new Date().getHours();
  let message = "Good evening!";
  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  }
  greeting.textContent = message;
}

// Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    if (email.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Please write a message.";
      isValid = false;
    } else if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent = "Your message has been sent successfully!";
      contactForm.reset();
    }
  });
}
