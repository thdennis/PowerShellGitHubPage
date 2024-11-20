const fetch = require('node-fetch'); 

const sendEmail = async () => {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.EMAILJS_PRIVATE_KEY}`
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

  const data = await response.json();
  if (response.ok) {
    console.log('SUCCESS!', data);
  } else {
    console.log('FAILED...', data);
  }
};

sendEmail();
