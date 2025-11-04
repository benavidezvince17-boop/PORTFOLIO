const certContainer = document.querySelector('.cert-container');
let currentIndex = 0;

function showNextCert() {
  const totalItems = document.querySelectorAll('.cert-item').length;
  if (currentIndex < totalItems - 3) { // Adjust if needed
    currentIndex++;
    updateSliderPosition();
  }
}

function showPrevCert() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
}

function updateSliderPosition() {
  const offset = -currentIndex * (100 / 3); // Change the divisor based on visible i
}