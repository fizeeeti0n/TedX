import React from 'react';
import PageLayout from '../components/PageLayout.js'; // Corrected import path with .js extension

/**
 * DiscoverPage component provides information about discovering new ideas through TED.
 * It includes an introductory paragraph and a list of key ways to discover content.
 */
const DiscoverPage = () => (
    <PageLayout title="Discover Ideas">
        <p className="text-gray-700 leading-relaxed">
            Uncover new ideas and perspectives. From groundbreaking scientific discoveries to thought-provoking philosophical concepts,
            TED provides a platform for curiosity and learning across all disciplines.
        </p>
        {/* List of discovery methods/features */}
        <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
            <li>Explore topics ranging from technology to global issues.</li>
            <li>Find curated playlists and recommended talks.</li>
            <li>Read articles and analyses from TED contributors.</li>
            <li>Connect with a community of curious minds.</li>
        </ul>
    </PageLayout>
);

export default DiscoverPage;