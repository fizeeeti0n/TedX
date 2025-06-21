import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * BeforeYouStartPage component provides essential information for prospective TEDx organizers
 * before they begin the application process.
 * It outlines key considerations and preparations.
 */
const BeforeYouStartPage = () => (
    <PageLayout title="Before You Start Your TEDx Event">
        <p className="text-gray-700 leading-relaxed">
            Congratulations on taking the first step towards organizing your own TEDx event! Before you apply for a license,
            there are a few key things you need to know to ensure a successful and compliant event.
        </p>
        <h3 className="font-semibold text-xl text-gray-800 mt-6 mb-3">Key Considerations:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Understand the TEDx program rules and guidelines.</li>
            <li>Gather your core team and identify roles.</li>
            <li>Define your event concept and local theme.</li>
            <li>Research potential speakers and performers.</li>
            <li>Plan your budget and fundraising strategy.</li>
            <li>Familiarize yourself with the application process.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
            A thorough understanding of these points will set you up for a smooth application and a memorable event.
        </p>
    </PageLayout>
);

export default BeforeYouStartPage;
