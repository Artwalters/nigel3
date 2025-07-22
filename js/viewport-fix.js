// Fix for mobile browser navigation bar viewport issues
// This prevents the page from jumping when browser UI appears/disappears

function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set initial value
setVH();

// Update on resize (including when mobile browser UI changes)
window.addEventListener('resize', setVH);

// Update on orientation change
window.addEventListener('orientationchange', () => {
  // Small delay to ensure accurate measurement after orientation change
  setTimeout(setVH, 100);
});

// Additional fix for iOS Safari and other browsers
window.addEventListener('load', setVH);
window.addEventListener('scroll', () => {
  // Only recalculate occasionally to avoid performance issues
  clearTimeout(window.vhTimeout);
  window.vhTimeout = setTimeout(setVH, 100);
});