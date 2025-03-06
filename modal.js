document.addEventListener("DOMContentLoaded", function () {
  // Auto-open modal on page load
  const modal = document.getElementById("newsletterModal");
  if (modal) {
    modal.style.display = "flex";
  }

  // Form submission
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;

      const response = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      document.getElementById("message").textContent = data.message;
    });
  }

  // Manual button to open modal
  const openBtn = document.getElementById("openNewsletter");
  if (openBtn) {
    openBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });
  }

  // Close modal when clicking "×"
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal when clicking outside
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
