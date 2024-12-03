// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  console.log("Website ready!");
});

document
  .getElementById("guestbook-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
      const messageList = document.getElementById("message-list");

      const newMessage = document.createElement("li");
      newMessage.textContent = `${name}: ${message}`;
      messageList.appendChild(newMessage);

      // Clear the form fields
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
    }
  });
