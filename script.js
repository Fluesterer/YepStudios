// script.js
let clickCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("secret-title");
  const banana = document.getElementById("banana-secret");

  if (title && banana) {
    title.addEventListener("click", () => {
      clickCount++;
      if (clickCount === 3) {
        banana.style.display = "block";
      }
    });
  }
});
