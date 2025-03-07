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

// Name and Email:
document.getElementById("newsletterForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
      },
      body: JSON.stringify({ name, email })
    });

    const result = await response.json();
    alert(result ? "Subscribed Successfully!" : "Failed to Subscribe!");
  });
