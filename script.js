document.addEventListener('DOMContentLoaded', () => {
  // scroll the form into view when the CTA button is clicked
  const cta = document.querySelector('.cta-button');
  if (cta) {
    cta.addEventListener('click', () => {
      const formSection = document.querySelector('section form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // toggle requirement lists for each country
  document.querySelectorAll('.country-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.nextElementSibling;
      if (next && next.tagName === 'OL') {
        next.style.display = next.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // simple email validation on form submit
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      const emailField = form.querySelector('[name=email]');
      if (emailField) {
        const email = emailField.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
          alert('Please enter a valid email address.');
          e.preventDefault();
        }
      }
    });
  }
});
