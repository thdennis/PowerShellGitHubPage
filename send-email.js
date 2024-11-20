const axios = require('axios');
require('dotenv').config();

const sendEmail = async () => {
  try {
    console.log('Preparing to send email...');

    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: {
        name: 'User',
        notes: 'Email sent from GitHub Actions!'
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EMAILJS_PRIVATE_KEY}`
      }
    });

    console.log('SUCCESS!', response.data);
  } catch (error) {
    if (error.response) {
      console.log('FAILED...', error.response.data);
    } else {
      console.log('Request failed:', error.message);
    }
  }
};

sendEmail();
