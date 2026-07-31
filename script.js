const form = document.querySelector('#signup-form');
const note = document.querySelector('#form-note');

document.querySelector('#year').textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Updates are not open yet — check back soon.';
  note.setAttribute('role', 'status');
});
