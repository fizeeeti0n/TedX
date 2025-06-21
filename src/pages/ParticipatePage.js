import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * ParticipatePage component outlines various ways users can get involved with TED.
 * It lists different programs and opportunities for community engagement.
 */
const ParticipatePage = () => (
    <PageLayout title="Participate in TED">
        <p className="text-gray-700 leading-relaxed">
            Become an active part of the TED community. Whether you're interested in organizing an event, becoming a TED Translator,
            or joining a conversation, there are many ways to get involved.
        </p>
        {/* List of participation opportunities */}
        <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
            <li>Become a TEDx Organizer</li>
            <li>Join the TED Translators program</li>
            <li>Apply to speak at a TED event</li>
            <li>Engage in discussions on TED.com</li>
        </ul>
    </PageLayout>
);

export default ParticipatePage;
