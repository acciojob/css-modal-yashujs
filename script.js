//your JS code here. If required.
 const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close-modal");

    // Open modal
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close modal on close button click
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal on clicking outside content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });