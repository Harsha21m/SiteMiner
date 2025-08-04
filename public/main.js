function toggleMenu() {
  const nav = document.getElementById("navButtons");
  nav.classList.toggle("show");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}