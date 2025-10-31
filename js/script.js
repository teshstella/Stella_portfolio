// Show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form validation using DOM manipulation
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

const contactForm = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    msg.textContent = '⚠️ Please fill in all fields.';
    msg.style.color = 'red';
  } else {
    msg.textContent = '✅ Thank you, your message has been sent successfully!';
    msg.style.color = 'green';
    form.reset();
  }
});
