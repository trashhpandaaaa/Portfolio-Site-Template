'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Create a transporter using Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Prepare the email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your own email
      subject: `Portfolio Contact: ${formData.name}`,
      text: `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3c6255; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${formData.name}</p>
  <p><strong>Email:</strong> ${formData.email}</p>
  <div style="margin-top: 20px;">
    <strong>Message:</strong>
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 5px;">
      ${formData.message.replace(/\n/g, '<br />')}
    </div>
  </div>
  <p style="margin-top: 30px; font-size: 12px; color: #718096;">This message was sent from your portfolio website contact form.</p>
</div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
} 