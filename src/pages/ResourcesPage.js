import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * ResourcesPage component lists various resources available to TEDx organizers.
 * It includes branding guidelines, templates, and community support options.
 */
const ResourcesPage = () => (
    <PageLayout title="Resources for TEDx Organizers">
        <p className="text-gray-700 leading-relaxed">
            Access a wealth of resources designed to support TEDx organizers worldwide.
            Connect with peers, find templates, and get answers to your questions.
        </p>
        <h3 className="font-semibold text-xl text-gray-800 mt-6 mb-3">Available Resources:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Official TEDx Branding Guidelines</li>
            <li>Speaker Agreement Templates</li>
            <li>Marketing and Social Media Kits</li>
            <li>Event Planning Checklists</li>
            <li>Community Forums and Discussion Boards</li>
            <li>Webinars and Training Videos</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
            These resources are continually updated to help you create impactful and inspiring TEDx events.
        </p>
    </PageLayout>
);

export default ResourcesPage;
