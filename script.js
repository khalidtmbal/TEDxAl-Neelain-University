const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
const form = document.querySelector('#interestForm');
if (form) form.addEventListener('submit', (event) => { event.preventDefault(); const status = document.querySelector('#formStatus'); status.textContent = 'Thanks for your interest! This demo does not send or store submissions yet. Connect a form service before launch.'; status.style.color = '#a21b32'; });
