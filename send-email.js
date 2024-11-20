global.location = { protocol: 'https:' };  // Mock the location object

const emailjs = require('@emailjs/browser');
require('dotenv').config();

const sendEmail = async () => {
  try {
    console.log('Preparing to send email...');
    
    emailjs.init(process.env.EMAILJS_USER_ID);

    const templateParams = {
      name: 'User',
      notes: 'Email sent from GitHub Actions!'
    };

    const result = await emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams, process.env.EMAILJS_USER_ID);
    
    console.log('SUCCESS!', result.text);
  } catch (error) {
    console.log('FAILED...', error);
  }
};

sendEmail();
