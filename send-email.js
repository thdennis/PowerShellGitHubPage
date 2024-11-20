const emailjs = require('@emailjs/browser');

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY
});

const templateParams = {
  name: 'User',
  notes: 'Email sent from GitHub Actions!'
};

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (error) => {
    console.log('FAILED...', error);
  });
