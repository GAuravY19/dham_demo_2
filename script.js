const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.classList.remove('opacity-0');
    msg.style.opacity = 1;

    setTimeout(() => {
      msg.style.opacity = 0;
      form.reset();
    }, 3000);
  });
}
