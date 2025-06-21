import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * OrganizerGuidePage component provides an overview of the guide available for TEDx organizers.
 * It lists key sections covered in the comprehensive guide.
 */
const OrganizerGuidePage = () => (
    <PageLayout title="Organizer Guide">
        <p className="text-gray-700 leading-relaxed">
            This comprehensive guide provides step-by-step instructions and best practices for organizing a successful TEDx event.
            It covers everything from team building to speaker coaching, venue selection, and event day management.
        </p>
        <h3 className="font-semibold text-xl text-gray-800 mt-6 mb-3">Key Sections:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Getting Started: Licensing and Team Formation</li>
            <li>Content Curation: Finding and Coaching Speakers</li>
            <li>Event Logistics: Venue, Budget, and Sponsorships</li>
            <li>Marketing and Promotion: Spreading the Word</li>
            <li>Event Day Execution: Ensuring a Smooth Experience</li>
            <li>Post-Event: Follow-up and Reporting</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
            Download the full guide (PDF link would go here) for detailed information and templates.
        </p>
    </PageLayout>
);

export default OrganizerGuidePage;
