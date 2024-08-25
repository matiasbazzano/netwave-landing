document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const language = document.getElementById('language-switch').checked ? 'es' : 'en';

  const name = event.target.name.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  const message = event.target.message.value;

  emailjs.send('EMAIL_SERVICE_ID', 'USER_TEMPLATE_ID', {
      to_name: name,
      to_email: email,
  });

  emailjs.send('EMAIL_SERVICE_ID', 'ADMIN_TEMPLATE_ID', {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
      to_email: 'netwave.contact@gmail.com'
  });

  const alertMessage = language === 'es' 
  ? 'Gracias por contactarnos. Te hemos enviado un correo de confirmación.' 
  : 'Thank you for contacting us. We have sent you a confirmation email.';

    alert(alertMessage);
    event.target.reset();
});
