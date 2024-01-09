// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)

    // For demonstration purposes, log the form data to the console
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;


