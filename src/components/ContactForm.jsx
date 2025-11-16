import React from 'react';

// Reusable Button Component
const FormButton = ({ children }) => {
  // Styles based on .common-btn
  const baseClasses =
    'py-2 px-5 rounded cursor-pointer tracking-wider border-2 transition-all duration-250 w-full';
  return (
    <input
      type="submit"
      value={children}
      className={`${baseClasses} bg-primary-teal-dark text-white border-primary-teal-dark
                hover:bg-white hover:text-primary-teal-dark hover:border-primary-teal-dark`}
    />
  );
};

const ContactForm = () => {
  // Styling for input controls based on .form-controls
  const inputClasses =
    'w-full p-3 my-4 border-2 border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:border-primary-teal-mid transition-colors';

  return (
    <div className="contact-form-container w-full">
      {/* greet-heading */}
      <h1 className="text-2xl font-light mb-8">Get In Touch</h1>

      <form
        action="https://formspree.io/f/xvgppjyj" // Retain Formspree action
        method="POST"
        className="contact-form flex flex-col"
      >
        <input
          className={inputClasses}
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className={inputClasses}
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input
          className={inputClasses}
          type="tel"
          name="phone"
          placeholder="Your Phone"
        />
        <textarea
          className={`${inputClasses} resize-none`}
          name="message"
          placeholder="Write your message"
          rows="7"
          required
        ></textarea>

        <FormButton>Send Message</FormButton>
      </form>
    </div>
  );
};

export default ContactForm;
