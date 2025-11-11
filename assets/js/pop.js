const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("closeBtn");

// Make all images with class "popup-trigger" clickable
document.querySelectorAll(".popup-trigger").forEach(img => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;
    popup.style.display = "flex";
  });
});

// Close popup when X is clicked
closeBtn.onclick = () => {
  popup.style.display = "none";
};

// Close popup when clicking outside the image
popup.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});
