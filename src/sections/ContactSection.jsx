import React from 'react';
import ContactForm from '../components/ContactForm'; // <-- NEW IMPORT
// Reusable Button Component (assuming you included it in HeroSection,
// but we include it here for completeness)
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

// Component for the Contact Details (Email, Phone, Address)
const ContactDetails = () => (
  <div className="contact-details w-4/5 lg:w-1/2">
    {/* greet-heading */}
    <h1 className="text-2xl font-light mb-8">My Contact Details</h1>

    <div className="details mb-6">
      <h5 className="contact-heading text-lg font-bold">EMAIL</h5>
      {/* contact-text */}
      <p className="text-base text-gray-300">selahadinas93gmail.com</p>
    </div>

    <div className="details mb-6">
      <h5 className="contact-heading text-lg font-bold">PHONE</h5>
      <p className="text-base text-gray-300">+251 966 007597</p>
    </div>

    <div className="details mb-6">
      <h5 className="contact-heading text-lg font-bold">ADDRESS</h5>
      <p className="text-base text-gray-300">Addis Ababa</p>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section id="contactme" className="contact py-20 px-4 sm:px-8 lg:px-20">
      {/* ... (heading remains the same) */}

      <div className="contact-content flex flex-col items-center lg:flex-row lg:justify-between my-12 gap-12 lg:gap-8 max-w-7xl mx-auto">
        {/* // --- Replaced the inline form with the modular ContactForm component ---
         */}
        <div className="contact-form-container w-4/5 lg:w-1/2">
          <ContactForm />
        </div>

        {/* Contact Details */}
        <ContactDetails />
      </div>
    </section>
  );
};

export default ContactSection;
