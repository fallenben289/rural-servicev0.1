  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("newsletterModal");
    const closeBtn = document.querySelector(".close");

    // Auto-open modal after 1 second
    setTimeout(() => {
      modal.style.display = "flex";
      modal.style.opacity = "1";
    }, 1000);

    // Close modal when clicking "×"
    closeBtn.addEventListener("click", function () {
      closeModal();
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });

    function closeModal() {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.style.display = "none";
      }, 300); // Smooth fade-out effect
    }
  });
