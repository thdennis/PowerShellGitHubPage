const emailjs = require('@emailjs/browser');

emailjs.init('7tS3TMQkimjiJq10t'); // Initialize EmailJS with your user ID

const templateParams = {
  name: 'User',
  notes: 'Email sent from GitHub Actions!'
};

emailjs.send('service_6wnxufr', 'template_ql5oqxo', templateParams)
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (error) => {
    console.log('FAILED...', error);
  });
