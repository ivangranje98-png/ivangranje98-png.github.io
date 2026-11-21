document.getElementById('year').textContent = new Date().getFullYear();

const root = document.documentElement;
document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

const emailItem = document.getElementById('email-item');
const copyNote = document.getElementById('copy-note');
emailItem.addEventListener('click', function (e) {
  if (navigator.clipboard) {
    e.preventDefault();
    navigator.clipboard.writeText('ivan.granje98@gmail.com');
    copyNote.textContent = 'Correo copiado al portapapeles';
    setTimeout(() => { copyNote.textContent = ''; }, 1800);
  }
});
