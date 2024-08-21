import emailjs from 'emailjs-com';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    emailjs.sendForm('service_djhiq0o', 'template_t5egs3k', form, 'HTTYH7qU0mi62zvpR')
      .then((response) => {
        console.log('Success:', response);
        alert('Your message has been sent successfully!');
        form.reset();
      }, (error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      });
  });
});