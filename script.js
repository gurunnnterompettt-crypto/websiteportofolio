const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  if (window.innerWidth <= 800) nav.style.display = 'none';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formStatus').textContent =
    `Terima kasih, ${name}! Pesan kamu sudah disiapkan.`;
  this.reset();
});
