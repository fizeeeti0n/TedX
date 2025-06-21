import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * ContactPage component provides a form for users to send messages or inquiries.
 * It includes fields for name, email, subject, and message.
 * Form submission is currently a placeholder for backend email sending or ticket creation.
 * @param {object} props - The component's properties.
 * @param {function} props.setNotification - Function to display temporary notifications.
 */
const ContactPage = ({ setNotification }) => {
    /**
     * Handles the form submission event for the contact form.
     * Prevents default form behavior and displays a placeholder success notification.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default browser form submission
        // Placeholder for actual contact form submission logic (e.g., API call to send email)
        setNotification({ message: "Your message has been sent! We will get back to you soon.", type: 'success' });
        console.log("Contact form submitted!");
        // In a real application, you might clear the form or redirect the user here.
    };

    return (
        <PageLayout title="Contact Us">
            <p className="text-gray-700 mb-6">Have a question or need assistance? Please fill out the form below, and we'll get back to you as soon as possible.</p>
            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                <div>
                    <label htmlFor="contactName" className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
                    <input
                        type="text"
                        id="contactName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required // HTML5 validation: field is required
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail" className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
                    <input
                        type="email"
                        id="contactEmail"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactSubject" className="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
                    <input
                        type="text"
                        id="contactSubject"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactMessage" className="block text-gray-700 text-sm font-bold mb-2">Your Message:</label>
                    <textarea
                        id="contactMessage"
                        rows="6"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                >
                    Send Message
                </button>
            </form>
        </PageLayout>
    );
};

export default ContactPage;
