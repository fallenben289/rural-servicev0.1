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

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("newsletterModal");
    const closeBtn = document.querySelector(".close");
    const openBtn = document.getElementById("openNewsletter");
    
    if (modal) {
      // Auto-open modal after a short delay for a better user experience
      setTimeout(() => {
        modal.style.display = "flex";
        modal.style.opacity = "1";
      }, 1000); // Delay opening for 1 second
    }

    // Manual button to open modal
    if (openBtn) {
      openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        modal.style.opacity = "1";
      });
    }

    // Close modal when clicking "×"
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        closeModal();
      });
    }

    // Close modal when clicking outside
    window.onclick = function (event) {
      if (event.target === modal) {
        closeModal();
      }
    };

    function closeModal() {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.style.display = "none";
      }, 300); // Matches the fade-out duration
    }
  });
