// Function to open the modal
function openModal(src, captionText) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  caption.innerText = captionText;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Optional: Close modal when clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
