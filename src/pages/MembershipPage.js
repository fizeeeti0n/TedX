import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * MembershipPage component provides a form for users to sign up for TED membership.
 * It includes fields for full name, email, and membership type.
 * Form submission is currently a placeholder for backend payment processing and membership activation.
 * @param {object} props - The component's properties.
 * @param {function} props.setNotification - Function to display temporary notifications.
 */
const MembershipPage = ({ setNotification }) => {
    /**
     * Handles the form submission event for the membership form.
     * Prevents default form behavior and displays a placeholder notification.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default browser form submission
        // Placeholder for actual membership sign-up logic (e.g., API call to payment gateway)
        setNotification({ message: "Membership sign-up is a placeholder. This would typically involve payment processing.", type: 'info' });
        console.log("Membership form submitted!");
    };

    return (
        <PageLayout title="TED Membership">
            <p className="text-gray-700 mb-6">Join the TED community as a member to unlock exclusive content, events, and support our mission.</p>
            {/* Membership sign-up form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                <div>
                    <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required // HTML5 validation: field is required
                    />
                </div>
                <div>
                    <label htmlFor="memberEmail" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="memberEmail"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        required // HTML5 validation: field is required
                    />
                </div>
                <div>
                    <label htmlFor="membershipType" className="block text-gray-700 text-sm font-bold mb-2">Membership Type:</label>
                    <select
                        id="membershipType"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                    >
                        <option value="basic">Basic ($50/year)</option>
                        <option value="premium">Premium ($100/year)</option>
                        <option value="patron">Patron ($250/year)</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                >
                    Become a Member
                </button>
            </form>
        </PageLayout>
    );
};

export default MembershipPage;
