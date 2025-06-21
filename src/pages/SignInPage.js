import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * SignInPage component provides a login form for users to access their TED account.
 * It includes fields for email and password, and a submit button.
 * Form submission is currently a placeholder for backend authentication.
 * @param {object} props - The component's properties.
 * @param {function} props.setNotification - Function to display temporary notifications.
 */
const SignInPage = ({ setNotification }) => {
    /**
     * Handles the form submission event for the sign-in form.
     * Prevents default form behavior and displays a placeholder notification.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default browser form submission
        // Placeholder for actual sign-in logic (e.g., API call to backend for authentication)
        setNotification({ message: "Sign-in functionality is a placeholder. In a real app, this would authenticate a user.", type: 'info' });
        console.log("Sign-in form submitted!");
    };

    return (
        <PageLayout title="Sign In">
            <p className="text-gray-700 mb-6">Access your TED account to personalize your experience and save your favorite talks.</p>
            {/* Sign-in form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        placeholder="your.email@example.com"
                        required // HTML5 validation: field is required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-300"
                        placeholder="••••••••"
                        required // HTML5 validation: field is required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                    >
                        Sign In
                    </button>
                    {/* Placeholder link for forgotten password */}
                    <button onClick={() => setNotification({message: "Forgot password functionality not implemented.", type: 'info'})} className="inline-block align-baseline font-bold text-sm text-red-600 hover:text-red-800">
                        Forgot Password?
                    </button>
                </div>
            </form>
            {/* Placeholder link for new user registration */}
            <p className="text-center text-gray-600 text-sm mt-4">
                Don't have an account? <button onClick={() => setNotification({message: "Sign up page functionality not implemented.", type: 'info'})} className="text-red-600 hover:text-red-800 font-bold">Sign Up</button>
            </p>
        </PageLayout>
    );
};

export default SignInPage;
