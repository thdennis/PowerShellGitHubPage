const fetch = require('node-fetch');
require('dotenv').config();

const sendEmail = async () => {
  try {
    const apiUrl = `https://api.emailjs.com/api/v1.0/email/send?privateKey=${process.env.EMAILJS_PRIVATE_KEY}`;

    console.log('Preparing to send email...');
    console.log('EMAILJS_PRIVATE_KEY:', process.env.EMAILJS_PRIVATE_KEY ? 'Exists' : 'Not Found');
    console.log('EMAILJS_SERVICE_ID:', process.env.EMAILJS_SERVICE_ID);
    console.log('EMAILJS_TEMPLATE_ID:', process.env.EMAILJS_TEMPLATE_ID);
    console.log('EMAILJS_USER_ID:', process.env.EMAILJS_USER_ID);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          name: 'User',
          notes: 'Email sent from GitHub Actions!'
        }
      })
    });

    console.log('EmailJS API response status:', response.status);
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      console.log('Parsed JSON response:', data);
      if (response.ok) {
        console.log('SUCCESS!', data);
      } else {
        console.log('FAILED...', data);
      }
    } catch (jsonError) {
      console.log('Response is not valid JSON:', text);
    }
  } catch (error) {
    console.log('Request failed:', error);
  }
};

sendEmail();
