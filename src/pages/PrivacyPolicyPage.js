import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * PrivacyPolicyPage component outlines the website's privacy policy.
 * It explains what information is collected and how it is used and protected.
 */
const PrivacyPolicyPage = () => (
    <PageLayout title="Privacy Policy">
        <p className="text-gray-700 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal data when you use our website and services.
            We are committed to being transparent about our practices and ensuring your information is handled securely.
        </p>
        <h3 className="font-semibold text-xl text-gray-800 mt-6 mb-3">Information We Collect:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data (IP address, browser type, pages visited, etc.)</li>
            <li>Information you provide when applying for a license or becoming a member.</li>
        </ul>
        <h3 className="font-semibold text-xl text-gray-800 mt-6 mb-3">How We Use Your Information:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>To provide and maintain our services.</li>
            <li>To manage your account and membership.</li>
            <li>To communicate with you about events and updates.</li>
            <li>To improve our website and user experience.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
            For more detailed information, please read the full Privacy Policy document.
        </p>
    </PageLayout>
);

export default PrivacyPolicyPage;
