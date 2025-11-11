const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("closeBtn");

// Track if popup is open
let popupOpen = false;

// Make all images with class "popup-trigger" clickable
document.querySelectorAll(".popup-trigger").forEach(img => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;
    popup.style.display = "flex";
    popupOpen = true;

    // Push a new history state
    history.pushState({popupOpen: true}, '');
  });
});

// Function to close popup
function closePopup() {
  popup.style.display = "none";
  popupImage.src = '';
  popupOpen = false;

  // Remove the history state we pushed
  if (history.state && history.state.popupOpen) {
    history.back();
  }
}

// Close popup when X is clicked
closeBtn.onclick = () => {
  closePopup();
};

// Close popup when clicking outside the image
popup.addEventListener("click", e => {
  if (e.target === popup) {
    closePopup();
  }
});

// Handle Android back button / browser back
window.addEventListener('popstate', (event) => {
  if (popupOpen) {
    // If popup is open, close it instead of navigating back
    closePopup();
  } 
  // Else, normal back button behavior occurs
});


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
