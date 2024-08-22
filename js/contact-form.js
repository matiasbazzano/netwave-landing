document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const formData = new FormData(this);
  
    fetch('/api/sendEmail.js', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      alert('Email sent successfully');
      document.getElementById('contact-form').reset();
    })
    .catch(error => {
      alert('Failed to send email');
    });
  });