const emailjs = require('@emailjs/browser');

// Initialize EmailJS with your public key
emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

const templateParams = {
  name: 'User',
  notes: 'Email sent from GitHub Actions!'
};

emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams)
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (error) => {
    console.log('FAILED...', error);
  });
