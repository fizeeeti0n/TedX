import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * TermsOfUsePage component presents the terms and conditions for using the website.
 * It highlights key provisions that users agree to by accessing the site.
 */
const TermsOfUsePage = () => (
    <PageLayout title="Terms of Use">
        <p className="text-gray-700 leading-relaxed">
            Welcome to TED.com. By accessing or using our website, you agree to comply with and be bound by these Terms of Use.
            Please review them carefully. If you do not agree to these terms, you should not use this website.
        </p>
        <h3 className="font-semibold text-xl text-gray-800 mt-6 mb-3">Key Provisions:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Acceptance of Terms</li>
            <li>Intellectual Property Rights (Copyright, Trademarks)</li>
            <li>User Conduct and Responsibilities</li>
            <li>Disclaimers and Limitation of Liability</li>
            <li>Governing Law and Jurisdiction</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
            These terms may be updated from time to time. Your continued use of the site signifies your acceptance of any changes.
        </p>
    </PageLayout>
);

export default TermsOfUsePage;
