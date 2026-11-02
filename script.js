const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const service = link.dataset.service;
    const message = `नमस्ते गुरुजी, मुझे ${service} के बारे में जानकारी और बुकिंग करनी है। कृपया विधि, तिथि और शुल्क बताएं।`;
    window.open(`https://wa.me/917067539825?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
