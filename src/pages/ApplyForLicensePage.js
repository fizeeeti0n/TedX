import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * ApplyForLicensePage component provides a form for applying for a TEDx event license.
 * It collects essential information about the proposed event and contact details.
 * Form submission is currently a placeholder for backend data processing.
 * @param {object} props - The component's properties.
 * @param {function} props.setNotification - Function to display temporary notifications.
 */
const ApplyForLicensePage = ({ setNotification }) => {
    /**
     * Handles the form submission event for the license application form.
     * Prevents default form behavior and displays a placeholder success notification.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default browser form submission
        // Placeholder for actual license application submission logic (e.g., API call to backend)
        setNotification({ message: "License application submitted! This is a placeholder. A real application would send data to a backend.", type: 'success' });
        console.log("License application form submitted!");
        // In a real application, you might clear the form or redirect the user here.
    };

    return (
        <PageLayout title="Apply for a TEDx License">
            <p className="text-gray-700 mb-6">
                Start your journey to bring "ideas worth spreading" to your community by applying for an official TEDx license.
            </p>
            {/* License application form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                <div>
                    <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">Proposed Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required // HTML5 validation: field is required
                    />
                </div>
                <div>
                    <label htmlFor="eventLocation" className="block text-gray-700 text-sm font-bold mb-2">Location (City, Country):</label>
                    <input
                        type="text"
                        id="eventLocation"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactPerson" className="block text-gray-700 text-sm font-bold mb-2">Main Contact Person:</label>
                    <input
                        type="text"
                        id="contactPerson"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail" className="block text-gray-700 text-sm font-bold mb-2">Contact Email:</label>
                    <input
                        type="email"
                        id="contactEmail"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="eventConcept" className="block text-gray-700 text-sm font-bold mb-2">Brief Event Concept:</label>
                    <textarea
                        id="eventConcept"
                        rows="5"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                >
                    Submit Application
                </button>
            </form>
        </PageLayout>
    );
};

export default ApplyForLicensePage;
